import React from 'react'
import {Map} from '../Components/Map'
import {DTable} from './DTable'


export const Dashboard = () => {
 return (
    <div className='w-full p-2 bg-slate-100 flex flex-col md:flex-row  justify-items' > 
     
        <Map />
    
         <DTable />
     
    </div>
  )
}
