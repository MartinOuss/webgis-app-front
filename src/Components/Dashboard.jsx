import React from 'react'
import {Map} from '../Components/Map'
import { DTable } from './DTable'
import { SetIrriParamsForm } from './SetIrriParamsForm'
import parcelGeoJSON from '../Assets/ParcelsJson.json'
import { useState } from 'react'
import Moment from 'react-moment'
import moment from 'moment'



export const Dashboard = (props) => {

  
  
  const mapParcels = parcelGeoJSON;

 return (
    <div className='w-full  p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map mapParcels ={mapParcels}/>
    
        <DTable />
        
      
        
        
        
     
    </div>
  )
}
