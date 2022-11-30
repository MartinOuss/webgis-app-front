import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { Parcel } from './Parcel'
import { useState } from 'react'




export const DTable = ({parcels}) => {

 
  return (
    <div className=' overflow-auto max-h-[400px] md:w-full flex justify-center mr-1 text-center p-2'>
      
      <table className=' table-fixed border-collapse border-spacing-2 border border-slate-500  w-full'>
                <thead className='sticky top-0 bg-slate-500 text-white h-1' >
                        <tr>
                            <th className='border border-slate-600'>Parcel ID</th>
                            <th className='border border-slate-600'>Parcel owner</th>
                            <th className='border border-slate-600'>Node number</th>
                            <th className='border border-slate-600'>Duration</th>                                                     

                            
                        </tr>
                    </thead>
                    <tbody className ='p-1'>
                      {parcels.filter((parcel)=> parcel.parcel_id !=="").map((parcel,index) =>{

                        return (  
                          
                          <Parcel key = {index} parcel = {parcel}/>
                     
                      )}
                      )}

                      
        
                    </tbody>

                </table>

  </div>
  )
}
