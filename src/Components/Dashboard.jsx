import React from 'react'
import {Map} from '../Components/Map'
import { DTable } from './DTable'
import { SetIrriParamsForm } from './SetIrriParamsForm'
import parcelGeoJSON from '../Assets/ParcelsJson.json'



export const Dashboard = (props) => {
  const parcels = parcelGeoJSON.features ;
  const mapParcels = parcelGeoJSON;

 return (
    <div className='w-full  p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map />
    
        <DTable parcels ={parcels}/>

        <SetIrriParamsForm mapParcels ={mapParcels}/>
     
    </div>
  )
}
