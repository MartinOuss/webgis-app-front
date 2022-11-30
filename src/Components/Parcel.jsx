import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { useState } from 'react'


export const Parcel = ({parcel}) => {

    //  const [datetime , setDateTime] = useState([{date : new Date(), id :''}])
    //  const [trackedId , getTrackedId] = useState([])

  // console.log(datetime)
  // console.log(trackedId)



  
  // if(!trackedId.includes(parcel.properties.id) ){ 
  //   setDateTime((data)=>[...data,{date: moment(datetime.date).add(Math.round(parcel.properties.IrriDur), 'minutes').format('YYYY-MM-DD HH:mm'), id: parcel.properties.id}])
  // // getTrackedId((data)=>[...data, parcel.properties.id])
  

  return (
    <tr>
    <td className = 'border border-slate-700'  > {parcel.parcel_id}</td>
    <td className = 'border border-slate-700' > {parcel.parcel_owner}</td>
    <td className = 'border border-slate-700' > {}</td>
    <td className = 'border border-slate-700' > {<Moment format='YYYY-MM-DD HH:mm'>
     {} </Moment>}</td>
    
  </tr>
  )


} 
