import React from 'react'
import {Map} from '../Components/Map'
import { DTable } from './DTable'
import { SetIrriParamsForm } from './SetIrriParamsForm'
import parcelGeoJSON from '../Assets/ParcelsJson.json'
import { useState } from 'react'
import Moment from 'react-moment'
import moment from 'moment'



export const Dashboard = (props) => {

  
  // const [parcels , getParcels]= useState([{parcel_id :"" , parcel_owner :"", Irri_date:"" , Irri_dur:""}])
 
  // console.log(parcels.length)
  // const Ids_length =  parcelGeoJSON.features.filter((parcel)=> parcel.properties.owner_name && parcel.properties.node_num !== null).length;


  
  // if(parcels.length <= Ids_length ){
     
  // parcelGeoJSON.features.filter(parcel => parcel.properties.owner_name && parcel.properties.node_num !== null).forEach(parcel => {
  //     getParcels((data) => [...data, { parcel_id: parcel.properties.id, parcel_owner: parcel.properties.owner_name, Irri_date: date , Irri_dur: Math.round(parcel.properties.IrriDur) }])

  //   })
  // }
  

  //   console.log(parcels)
  
  const mapParcels = parcelGeoJSON;

 return (
    <div className='w-full  p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map mapParcels ={mapParcels}/>
    
        <DTable />
        
      
        
        
        <SetIrriParamsForm />
     
    </div>
  )
}
