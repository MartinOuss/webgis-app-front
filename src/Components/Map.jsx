import React from 'react'
import { useRef} from 'react'
import { GeoJSON, CircleMarker, MapContainer, FeatureGroup, TileLayer} from "react-leaflet"
import L, {bounds} from 'leaflet';



// leaflet Draw :
// import {EditControl} from 'react-leaflet-draw'

// import "../src/App.css"

export const Map = (props) => {

  let center;
  let zoom;
  const mapRef = useRef(null);


  const selectedParcels = props.sortedData.filter(parcel => props.selectedCP.includes(parcel.properties.node_num))

  if (selectedParcels.length > 0) {

    // get initial value of bounds coordinates but it will be reversed because we got them from a geojson
  const bounds = selectedParcels.reduce((bounds, parcel) => bounds.extend(parcel.geometry.coordinates), new L.LatLngBounds())
  // get the real bounds by reversing the initial value 
 let corner1 = L.latLng(bounds._northEast.lng, bounds._northEast.lat);
 let corner2 = L.latLng(bounds._southWest.lng, bounds._southWest.lat);
 let  revBounds = L.latLngBounds(corner1, corner2) ;
//  fit the map to the bounds we got
  mapRef.current.fitBounds(revBounds);
  
  center = revBounds.getCenter();
  zoom = 16;
  console.log({center , bounds, revBounds})
} else {
 bounds = new L.LatLngBounds([[
  31.891004334924361,
  -4.347125514847765
    
],
[
  31.889757342824993,
  -4.34455274420302
                                
   
]]);
}

 
 
  
  // Calculate the center and zoom level based on the bounds
 

  const customStyle = (feature) => {
    if (props.selectedCP.includes(feature.properties.node_num) ) {
      return {
        color: '#02f537',
        weight: 4,
        opacity: 0.5
      }
    } else {
      return {
        color: '#000000',
        weight: 2,
        opacity: 0.8
      }
    }
  }





  // for leaflet draw ..............................................................................
  
  // const [parcelCoords , getPolyCoords] = useState([]);
  // const [parcelName , setParcelName] = useState('');
  // const [ownerName , setOwnerName] = useState('');

  // const handlePNChange = (e) => {setParcelName(e.target.value)};
  // const handleOwChange = (e) => {setOwnerName(e.target.value)}
  // const onCreate = (newParcel) => {console.log(newParcel)};

  // const handleSubmit = (e) => {
  //   // 'in order not to submit data to another page'
  //   e.preventDefault()
  //   //  this alert still doesnt work ..........................................................?????
  
  //     // onCreate(`${parcelName , ownerName , parcelCoords}`);
  //     console.log(`${parcelName , ownerName , parcelCoords}`);

    
  //     setParcelName ('parcelName');
  //     setOwnerName ('ownerName');
  //   };

 
  // const _onCreate = e =>{
  //   console.log(e)

  //  const {layerType , layer } = e ;

  //  if(layerType === 'polygon'){ 

  //   const {_leaflet_id} = layer ;

    
   
  //   // declare an empty array to store coordinates into then into the state after polygon creation 
  //    const coords = [];
     
  //    layer.getLatLngs()[0].forEach(element => {
      
  //     const coordLatLng = Object.values(element);
      
  //     // this line is for reversing lat and lng to be compatible with GeoJson format
  //     const coordLngLat = coordLatLng.reverse();
  //     coords.push(coordLngLat);

  //    });

  //    getPolyCoords((coordsArr)=>[... coordsArr ,{id : _leaflet_id, geometry:{type: layerType , coordinates : coords}}]);
     
  //  }

   

  // };

  // const _onEditPath = e =>{
  //   console.log(e)
  // };
  // const _onDeleted = e =>{
  //   console.log(e)
  // }

  //.........................................................................................
  return (
    <div className="h-[400px]  w-full md:w-[1400px] border border-black mr-1 text-center">
      <MapContainer className="min-h-full" center={center} zoom={zoom} ref={mapRef} bounds={bounds} scrollWheelZoom={false} >
        <TileLayer
          attribution=''
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains= {['mt0', 'mt1', 'mt2', 'mt3']}
          maxZoom= {21}
        />

          
{/* Parcels Layer */}

<GeoJSON pathOptions={customStyle} 

    data = {props.mapParcels} 
    
onEachFeature={function onEachFeature(feature, layer) {
  let label = JSON.stringify(layer.feature.properties.owner_name);
   
    layer.bindTooltip(label, {
      permanent: false,
      direction: "center",
      opacity: 0.7
    });
    layer.on("mouseover", function(e) {
      this.openTooltip();
    });
    layer.on("mouseout", function(e) {
      this.closeTooltip();
    });
    layer.on("click", (e) => {
     
      let coords =  e.target.feature.geometry.coordinates[0][0] ;
      const map = mapRef.current;
   
      let [lng, lat]= coords[0];
      
      map.panTo([lat, lng]);
      layer.setStyle({
        color: '#02f537',
        weight: 4,
        opacity: 0.5
      });

      
      
        
    });
  }
}
/>
{/* Network Layer */}

<GeoJSON data ={props.NetworkJson} >


</GeoJSON>

{/* CP layer */}

<GeoJSON data ={props.CPJson} 
 pointToLayer={(feature, latlng) => {
  return (
    <CircleMarker
      center={latlng}
      radius={5}
      color="red"
      fillColor="red"
      fillOpacity={0.5}
    />
  );
}}

>


</GeoJSON>


     
      


        <FeatureGroup>
          {/* for leaflet-Draw ........................... */}
          {/* <EditControl
            position="topright"
            onEdited={_onEditPath}
            onCreated={_onCreate}
            onDeleted={_onDeleted}
            draw={{
              rectangle: false,
              circlemarker: false,
              marker: false,
              circle: false,
              polyline: false,
            }}
          /> */}
          {/* .............................................. */}
        </FeatureGroup>
      </MapContainer>
    </div>
  );
}
