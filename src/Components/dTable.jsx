import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { Parcel } from './Parcel'
import { useState, useEffect, useRef } from 'react'
import parcelGeoJSON from '../Assets/ParcelsJson.json'



export const DTable = () => {



  const data = parcelGeoJSON.features;
  const [sortedData, setSortedData] = useState([]);
  const [dates , setDates] = useState([])
  
  useEffect( () => {
    // Sort the data by irrigation duration
    const sortedData = data.filter((parcel)=> parcel.properties.owner_name && parcel.properties.node_num !== null).sort((a, b) => a.properties.node_num - b.properties.node_num);
   
    // Update the state variable with the sorted data
    setSortedData(sortedData);
  }, [data]);

  useEffect(() => {
    
      let initialDate = new Date("2022-12-15 10:00");

      for (let i = 0; i < sortedData.length; i++) {
        const parcel = sortedData[i];
        const currentDate = new Date(initialDate);
        currentDate.setMinutes(currentDate.getMinutes() + Math.round(parcel.properties.IrriDur));
      
        setDates((data) => [...data,{ id: parcel.properties.id, rendezVous: currentDate }]);
        // Update initial date and time for next iteration
        initialDate = currentDate;
      }
   

    
  }, [sortedData]);
  console.log(dates)


  
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
         
          {sortedData.map((parcel, i) =>  (
            <tr key={i}>
              <td>{parcel.properties.id}</td>
              <td>{parcel.properties.owner_name}</td>
              <td>{parcel.properties.node_num}</td>
              <td>{Math.round(parcel.properties.IrriDur)}</td>
              <td>{dates[i].rendezVous.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
