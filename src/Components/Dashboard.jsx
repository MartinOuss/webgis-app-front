import React from 'react'
import {Map} from '../Components/Map'
import { DTable } from './DTable'
import { SetIrriParamsForm } from './SetIrriParamsForm'
import parcelGeoJSON from '../Assets/ParcelsJson.json'
import { useState, useEffect } from 'react'




export const Dashboard = (props) => {

  
  const mapParcels = parcelGeoJSON;
  const data = parcelGeoJSON.features;
  const [sortedData, setSortedData] = useState([]);
  const [dates , setDates] = useState([]);
  // state to store connexion point options 
  const [CPOptions, setCPOptions] = useState([]);
  // state to store start and end datetime from the form
  const [schedule , setschedule]= useState([{start:"", end : ""}]);
  const [selectedCP, setSelectedCP] = useState([]);

  
  
  useEffect( () => {

    if(schedule.length>0){

      
    
    // Sort the data by node number and node rank 
    const sortedData = data
      .filter(
        (parcel) =>
          parcel.properties.owner_name && parcel.properties.node_num !== null && selectedCP.includes(parcel.properties.node_num)
      )
      .sort((a, b) => {
        // if (a.properties.node_rank !== b.properties.node_rank) {
        //   return a.properties.node_rank < b.properties.node_rank ? -1 : 1;
        // } else {
          return a.properties.node_num - b.properties.node_num;
        // }
      });
   
    // Update the state variable with the sorted data
    setSortedData(sortedData);

    }
  }, [data ,schedule,selectedCP]);

 
  useEffect(() => {
    let optionSet = new Set();
    let Data = data
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
      
    Data.forEach(item => optionSet.add(item.properties.node_num));
    
  
    if (CPOptions.length === 0) {
      setCPOptions(Array.from(optionSet));
    }
  }, [data, CPOptions]);

  
  
  useEffect(() => {
    

     
      let initialDate = new Date(schedule[1].start);
    

    let newDates = [];

  
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
 
  }, [sortedData, schedule]);


  const calculateSchedule = (startDate, endDate, selectedOptions) => {
  setschedule((item)=>[...item, {start:startDate, end : endDate}]);
  setSelectedCP(selectedOptions)
   console.log({startDate,endDate,selectedOptions})
    
      
   };

  console.log({sortedData :sortedData})
  console.log({dates : dates})
  console.log({ConnexionPoints : CPOptions })
  console.log({schedule: schedule})
 

  


 return (
    <div className='w-full  p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map mapParcels ={mapParcels}/>
    
        <DTable sortedData ={sortedData} dates ={dates} />

        <SetIrriParamsForm CPOptions={CPOptions} onSubmit={calculateSchedule} />

       </div>
  )
}
