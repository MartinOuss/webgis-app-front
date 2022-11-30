import React from 'react'
import {Map} from '../Components/Map'
import { DTable } from './DTable'
import { SetIrriParamsForm } from './SetIrriParamsForm'
import parcelGeoJSON from '../Assets/ParcelsJson.json'
import { useState } from 'react'



export const Dashboard = (props) => {
  // const parcels = parcelGeoJSON.features ;
  const [parcels , getParcels]= useState([])

  parcelGeoJSON.features.filter(parcel=> parcel.properties.owner_name && parcel.properties.node_num !== null).forEach(parcel => {
     if (!parcels.includes(parcel))       
      getParcels((data)=>[...data, parcel])
      
   
    })

    console.log(parcels)

  const mapParcels = parcelGeoJSON;

 return (
    <div className='w-full  p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map mapParcels ={mapParcels}/>
    
        <DTable parcels ={parcels}/>

        <SetIrriParamsForm />
     
    </div>
  )
}
