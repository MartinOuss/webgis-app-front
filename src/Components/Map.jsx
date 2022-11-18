import React from 'react'
import {MapContainer, TileLayer } from "react-leaflet";

export const Map = () => {
    
  return (
    <div className='h-[400px]'>
<MapContainer className='min-h-full' center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
    </div>
     
       
      
    
  )
}
