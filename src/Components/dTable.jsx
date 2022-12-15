import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { Parcel } from './Parcel'
import { useState, useEffect, useRef } from 'react'
import parcelGeoJSON from '../Assets/ParcelsJson.json'



export const DTable = () => {


  const [data, setData] = useState(parcelGeoJSON.features);
  const prevData = useRef(data);  

  // Use the useEffect hook to sort the data according to the desired criteria
  useEffect(() => {
    
    // Sort the data by irrigation duration
    const sortedData = data.filter((parcel)=> parcel.properties.owner_name && parcel.properties.node_num !== null).sort((a, b) => a.properties.node_num - b.properties.node_num);

    console.log(sortedData)

    // Update the state variable with the sorted data
    setData(sortedData);

    prevData.current = sortedData;

    
  }, [prevData]);

  // Use the initial date and the irrigation duration for each parcel to calculate the rendezvous time
  let currentDate = new Date();
  let rendezvousTimes = data.map((parcel) => {
    currentDate.setMinutes(currentDate.getMinutes() + Math.round(parcel.properties.IrriDur));
    return currentDate;

  })

  
  console.log(data)
 
  return (
    <div className=" overflow-auto max-h-[400px] md:w-full flex justify-center mr-1 text-center p-2">
      <table className=" table-fixed border-collapse border-spacing-2 border border-slate-500  w-full">
        <thead className="sticky top-0 bg-slate-500 text-white h-1">
          <tr>
            <th className="border border-slate-600">Parcel ID</th>
            <th className="border border-slate-600">Parcel owner</th>
            <th className="border border-slate-600">Node number</th>
            <th className="border border-slate-600">Duration</th>
          </tr>
        </thead>
        <tbody className="p-1">
         
          {data.map((parcel, i) =>  (
            <tr key={i}>
              <td>{parcel.properties.owner_name}</td>
              <td>{parcel.properties.node_num}</td>
              <td>{parcel.properties.IrriDur}</td>
              <td>{rendezvousTimes[i].toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
