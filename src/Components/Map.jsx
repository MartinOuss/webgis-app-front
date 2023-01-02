import React from 'react'
import { useRef, useEffect} from 'react'
import { GeoJSON,Popup, MapContainer, FeatureGroup, TileLayer} from "react-leaflet"
import { CircleMarker } from 'react-leaflet/CircleMarker'
import L, {bounds} from 'leaflet';




// leaflet Draw :
// import {EditControl} from 'react-leaflet-draw'

// import "../src/App.css"

export const Map = (props) => {

  let center;
  let zoom;
  const mapRef = useRef(null);
  const parcelsRef = useRef(null);
  const netRef = useRef(null);
  const CPRef = useRef(null)
  

 



 


// had lblan dyal Toggle mazal mal9it lih l7el.............................................

  // const [toggeledCP, setToggeledCP] = useState(new Set());
  
  // const toggleSelection = (id) => {
  //   // Toggle the selection status of the point
  //   if (toggeledCP.has(id)) {
  //     // If it is selected, remove it from the Set
  //     setToggeledCP(new Set(toggeledCP.delete(id)))
  //   } else {
  //     // If it is not selected, add it to the Set
  //     setToggeledCP(new Set(toggeledCP.add(id)))
  //   }
  //   console.log({Toggeled:toggeledCP})
  // }

//  ...............................................................................................


// Calculate Map bounds changes 

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

 
 
  
// to style parcels and selected ones 
 

  const customStyle = (feature) => {
    console.log('custom style runs')
    if (props.selectedIds.includes(feature.properties.id) ) {
      return {
        color: '#02f537',
        weight: 3,
        opacity: 0.5,
        zIndex: 10,
        dashArray:"0, 0, 0, 0"

      }
    } else {
      return {
        
        color :'#a9d9db',
        weight: 2,
        opacity: 0.2,
        dashArray:"5, 10, 5, 10"
      

      }
    }
  }


  //  to style Network and its selected parts
  let newItems = props.sortedData.filter(item =>  props.selectedCP.includes(item.properties.node_num) ) ; 
    
  let itemCP = Array.from(new Set(newItems.map((item)=> item.properties.node_num)));

  const NetcustumStyle = (feature) => {  

     
    if (itemCP.includes(feature.properties.End_CP.toString()) ) {

        return {
        color: '#408bed',
        weight: 5,
        opacity: 1,
        zIndex: 10
      }
    } else {
        return {
        color: '#e8dcdc',
        weight: 1,
        opacity: 0.6,
    
      }
    }
  };

  const handleCPStyle =(feature)=>{ if (
    itemCP.includes(feature.properties.id.toString())){
return '#02f537'
  } else {
    return "red"
  }
    
  }

  // useEffect(() => {
  //   if (parcelsRef.current){
  //     parcelsRef.current. clearLayers()  
  //     parcelsRef.current.addData(props.mapParcels)
  //     parcelsRef.current.setStyle(customStyle) // add this line to update the style
  //   }
  // }, [parcelsRef, props.mapParcels, customStyle])


  useEffect(() => {
    if (parcelsRef.current){
      parcelsRef.current.setStyle(customStyle) // update the style
    }
  }, [parcelsRef, customStyle]) 

  useEffect(() => {
    if (netRef.current){
      netRef.current.setStyle(NetcustumStyle) // update the style
      console.log('set net style done ?')
    }
  }, [netRef, NetcustumStyle]) 

  useEffect(() => {
    if (CPRef.current){
      handleCPStyle()
         
      console.log('set CP style done ?')
    }
  }, [CPRef]) 

 
  

 





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


  console.warn(selectedParcels);
  console.warn(props.mapParcels);
 
  return (
    <div className="h-[600px]  w-full md:w-[1400px] border border-black mr-1 text-center">
      <MapContainer className="min-h-full" center={center} zoom={zoom}  ref={mapRef} bounds={bounds} scrollWheelZoom={false} >
        <TileLayer
          attribution=''
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains= {['mt0', 'mt1', 'mt2', 'mt3']}
          maxZoom= {21}
        />

          
{/* Parcels Layer */}

<GeoJSON style ={customStyle} 


    data = {props.mapParcels} 
    ref={parcelsRef}
    
onEachFeature={function onEachFeature(feature, layer) {
  let label = JSON.stringify(layer.feature.properties.owner_name);
   
    if(layer.feature.properties.owner_name !== null){
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

      // layer.setStyle({
      //   color: '#02f537',
      //   weight: 4,
      //   opacity: 0.5
      // });

      
      
        
    });
  }}
}
/>


{/* Network Layer */}

<GeoJSON data ={props.NetworkJson} style={NetcustumStyle} ref={netRef} >


</GeoJSON>

{/* CP layer */}

{/* <GeoJSON
data = {{...props.CPJson}}
     onEachFeature={(feature, layer) => {
      // click event to the layer
      layer.on('dblclick', (e) => {
        // Toggle the selection of the feature
        toggleSelection(feature.properties.id)
        console.log(e)
      })
    }}>
{props.CPJson?.features.map(feature => (
    
  
  <CircleMarker
    center={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
    radius={5}
    color={toggeledCP.has(feature.properties.id) ? '#02f537' : '#000000'}
    fillColor="red"
    fillOpacity={0.5}
  
  >
       <Popup>
          <span>C.P {feature.properties.id} </span>
        </Popup>
  </CircleMarker>
))}

</GeoJSON> */}


 {/*  this one still doesnt work properly */}

{props.selectedCP.length > 0 && props.CPJson.features.map(feature => (
  
        <CircleMarker
          ref ={CPRef}
          key={feature.properties.id}
          center={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
          radius={5}
          color={'#000000'}
          fillColor={handleCPStyle(feature)}
          // fillColor={itemCP.includes(feature.properties.id.toString()) ? '#02f537' : "red"}
          fillOpacity={0.5}
          onClick={(e) => console.log(e.target)}
        >
          <Popup>
            <span>C.P {feature.properties.id}</span>
          </Popup>
        </CircleMarker>
      ))}


{props.selectedCP.length === 0 && props.CPJson.features.map(feature => (
  
  <CircleMarker
    key={feature.properties.id}
    center={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
    radius={5}
    color={'#000000'}
    fillColor= "red"
    fillOpacity={0.5}
    onClick={(e) => console.log(e.target)}
  >
    <Popup>
      <span>C.P {feature.properties.id}</span>
    </Popup>
  </CircleMarker>
))}

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
