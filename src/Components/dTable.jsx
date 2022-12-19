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
  let newDates = [];


  useEffect( () => {
    // Sort the data by node number and node rank 
    const sortedData = data
      .filter(
        (parcel) =>
          parcel.properties.owner_name && parcel.properties.node_num !== null
      )
      .sort((a, b) => {
        if (a.properties.node_rank !== b.properties.node_rank) {
          return a.properties.node_rank < b.properties.node_rank ? -1 : 1;
        } else {
          return a.properties.node_num - b.properties.node_num;
        }
      });
   
    // Update the state variable with the sorted data
    setSortedData(sortedData);
  }, [data]);

  
  useEffect(() => {
    let initialDate = new Date("2022-12-15 10:00");
  
    function calculateDates() {
      
      for (let i = 0; i < sortedData.length; i++) {
        const prevParcel = sortedData[i-1];
        const currentParcel = sortedData[i];
  
        if (i === 0) {
          newDates.push({ id: currentParcel.properties.id, rendezVous: initialDate });
        } else  {
        const currentDate = new Date(initialDate);
          let minToAdd = Math.round(prevParcel?.properties?.IrriDur);
          currentDate.setMinutes(currentDate.getMinutes() + minToAdd);
          newDates.push({ id: currentParcel.properties.id, rendezVous: currentDate });
          initialDate = currentDate;

        }
  
         }
    }
  
    calculateDates();
    setDates(newDates);
  }, [sortedData]);

  console.log(dates)
  console.log(sortedData)
  
  
  return (
    <div className=" overflow-auto max-h-[400px] md:w-full flex justify-center mr-1 text-center p-2">
      <table className=" table-fixed border-collapse border-spacing-2 border border-slate-500  w-full">
        <thead className="sticky top-0 bg-slate-500 text-white h-1">
          <tr>
            <th className="border border-slate-600">Parcel ID</th>
            <th className="border border-slate-600">Parcel owner</th>
            <th className="border border-slate-600">Node number</th>
            <th className="border border-slate-600">Duration</th>
            <th className="border border-slate-600">Rendez-Vous</th>

          </tr>
        </thead>
        <tbody className="p-1">
         
          {sortedData.map((parcel, i) =>  (
            <tr key={i}>
              <td className = 'border border-slate-700'>{parcel.properties.id}</td>
              <td className = 'border border-slate-700'>{parcel.properties.owner_name}</td>
              <td className = 'border border-slate-700'>{parcel.properties.node_num}</td>
              <td className = 'border border-slate-700'>{Math.round(parcel.properties.IrriDur)}</td>
              <td className = 'border border-slate-700'>{dates.length > 0 && dates[i].rendezVous.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
