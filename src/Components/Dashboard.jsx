import React from 'react'
import {Map} from '../Components/Map'
import { SetIrriParamsForm } from './SetIrriParamsForm'


export const Dashboard = () => {
 return (
    <div className='w-full p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map />
    
        <SetIrriParamsForm/>
     
    </div>
  )
}
