import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { useState , useEffect, useMemo } from 'react'




export const DTable = (props) => {
  const [datetime , setDateTime] = useState({date : new Date()})


console.log(datetime)
 
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
                      {props.parcels.filter(parcel=> parcel.properties.owner_name && parcel.properties.node_num !== null)
                      .map(parcel =>{

                        setDateTime({date: moment(datetime).add(Math.round(parcel.properties.IrriDur), 'minutes').format('YYYY-MM-DD HH:mm')})
                      

                        return (                                     
                        <tr key = {parcel.properties.id} {...()=>{
                          console.log(datetime)
                        }}>
                          <td className = 'border border-slate-700' > {parcel.properties.id}</td>
                          <td className = 'border border-slate-700' > {parcel.properties.owner_name}</td>
                          <td className = 'border border-slate-700' > {parcel.properties.node_num}</td>
  
                        
                          <td className = 'border border-slate-700'  > {<Moment format='YYYY-MM-DD HH:mm' >
                           {datetime} </Moment>}</td>
                          
                        </tr>
                      )})

                      }
        
                    </tbody>

                </table>

  </div>
  )
}
