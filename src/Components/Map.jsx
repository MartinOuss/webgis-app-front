import React from 'react'
import { useState , useEffect} from 'react'
import { GeoJSON, MapContainer, FeatureGroup, TileLayer } from "react-leaflet"
import {onEachFeature} from 'leaflet'
import parcelGeoJSON from '../Assets/ParcelsJson.json'

// leaflet Draw :
// import {EditControl} from 'react-leaflet-draw'

// import "../src/App.css"

export const Map = () => {

let parcelStyle ={
  "color": "#02f537",
  "weight": 4,
  "opacity": 0.5
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
      <MapContainer className="min-h-full" center={[31.891004334924361, -4.347125514847765]} zoom={16}>
        <TileLayer
          attribution=''
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains= {['mt0', 'mt1', 'mt2', 'mt3']}
          maxZoom= {21}
        />

        {/* {parcelGeoJSON.map(parcel=>{ 
        <Polygon key= {parcel.features.prpoeties.id} position = {parcel.features.geometry}>

        </Polygon>
      })} */}

     

<GeoJSON pathOptions={parcelStyle} 

    data = {parcelGeoJSON} onEachFeature = { function onEachFeature(feature, layer){
     
      let label = JSON.stringify(layer.feature.properties.owner_name);
      console.log('names ? done')
      layer.bindTooltip(label, {permanent: true, direction: "center",className: "my-labels", opacity: 0.7}).openTooltip();
    
  }}/>

      {/* <GeoJSON pathOptions={parcelStyle} eventHandlers={{
    click: function onEachFeature(feature, layer){
     console.log(layer.feature.properties.id);
  }
  }} data = {parcelGeoJSON}/> */}


      


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
