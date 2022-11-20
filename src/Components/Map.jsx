import React from 'react'
import { useState , useEffect} from 'react'
import {MapContainer, FeatureGroup, TileLayer } from "react-leaflet"
import {EditControl} from 'react-leaflet-draw'

// import "../src/App.css"

export const Map = () => {
  
  const [polygonCoords , getPolyCoords] = useState([]);
  const [polygonData , getPolyData]  = useState([]);


 
  
  const _onCreate = e =>{
    console.log(e)

   const {layerType , layer } = e ;

   if(layerType === 'polygon'){ 

    const {_leaflet_id} = layer ;

    //to fix : after the creation state doesnt change, go learn more about useState!

    //  getPolyData((layerData) => [...layerData, {id: _leaflet_id, coordinates : layer.getLatLngs()[0]}]);
    
     

     layer.getLatLngs()[0].forEach(element => {
      
      const coordLatLng = Object.values(element);
      
      // this line is for reversing lat and lng to be compatible with GeoJson format
      const coordLngLat = coordLatLng.reverse();
      console.log(coordLngLat);
      getPolyCoords((coordsArr)=>[... coordsArr , coordLngLat]);

     });
    

     getPolyData((layerData) => [...layerData, {id: _leaflet_id, coordinates :[]}]);
  

 
   }

   

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
<div>
{JSON.stringify(polygonData, 0, 2)}
{JSON.stringify(polygonCoords, 0, 2)}

</div>
    </div>
  )
}
