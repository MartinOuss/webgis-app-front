import React from 'react'
import { useState } from 'react'
import {MapContainer, FeatureGroup, TileLayer } from "react-leaflet"
import {EditControl} from 'react-leaflet-draw'

// import "../src/App.css"

export const Map = () => {

  const [polygonllatlng , getPolyCoord]  = useState([]);

  
  const _onCreate = e =>{
    console.log(e)

   const {layerType , layer } = e ;

   if(layerType === 'polygon'){ 

    const {_leaflet_id , _latlngs } = layer ;

    //to fix : after the creation state doesnt change, go learn more about useState!

     getPolyCoord((layerData) => [...layerData, {id: _leaflet_id, coordinates : layer.getLatLngs()[0]}]);
    
     console.log(layer);
     console.log(JSON.stringify(layer.getLatLngs()[0]));
    
         
    
   }

  //  console.log(JSON.stringify(polygonllatlng, 0, 2));

  };

  const _onEditPath = e =>{
    console.log(e)
  };
  const _onDeleted = e =>{
    console.log(e)
  }
  return (
    <div className='h-[400px]'>
<MapContainer className='min-h-full' center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   <FeatureGroup>
    <EditControl
      position='topright'
      onEdited={_onEditPath}
      onCreated={_onCreate}
      onDeleted={_onDeleted}
      draw={{
        rectangle: false,
        circlemarker : false,
        marker : false,
        circle : false,
        polyline : false,
       
      }}
    />
    
  </FeatureGroup>
</MapContainer>
    </div>
  )
}
