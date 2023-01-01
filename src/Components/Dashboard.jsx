import React from 'react'
import {Map} from '../Components/Map'
import { DTable } from './DTable'
import { SetIrriParamsForm } from './SetIrriParamsForm'
import parcelGeoJSON from '../Assets/ParcelsJson.json'
import NetworkJson from '../Assets/NetworkJson.json'
import CPJson from '../Assets/CPJson.json'

import { useState, useEffect } from 'react'




export const Dashboard = (props) => {

  const data = parcelGeoJSON.features;
  const networkData = NetworkJson;
  const [mapParcels, setMapParcels] = useState(parcelGeoJSON);
  const [sortedData, setSortedData] = useState([]);
  const [dates , setDates] = useState([]);
  // state to store connexion point options 
  const [CPOptions, setCPOptions] = useState([]);
  // state to store start and end datetime from the form
  const [schedule , setschedule]= useState([]);
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
   
    // Update the mapParcels object when the sortedData array changes
    const updatedMapParcels = {
      ...mapParcels,
      features: sortedData,
    };
    setMapParcels(updatedMapParcels);
  }, [sortedData]);

 
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

   
   let initialDate = new Date();

if (schedule.length > 0) {
  const { start } = schedule[0];
  initialDate = new Date(start);
}
      

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
    if (startDate){
  setschedule((item)=>[...item, {start:startDate, end : endDate}]);
  setSelectedCP(selectedOptions)
   console.log({startDate,endDate,selectedOptions})
    }else{
      console.warn('wa makaynch  start time')
    }
    
      
   };

   const UpdateDataOnDT =(id)=>{
    
    console.log(sortedData);
    let newItems = sortedData.filter(item => item.properties.id !== id) ; 
    console.log(newItems);
    setSortedData(newItems);
    console.log(`db bsh ${id} deleted`)
    
   }

  console.log({sortedData :sortedData})
  console.log({dates : dates})
  console.log({ConnexionPoints : CPOptions })
  console.log({schedule: schedule})
  console.log({newParcels: mapParcels})

  

 return (
    <div className='w-full  p-2 bg-slate-100 flex flex-col md:flex-row ' > 
     
        <Map sortedData ={sortedData} mapParcels ={mapParcels} NetworkJson = {networkData} CPJson = {CPJson} selectedCP ={selectedCP}/>
    
        {(sortedData.length > 0 && dates.length > 0)&& <DTable sortedData ={sortedData} dates ={dates} onUpdateonDB = {UpdateDataOnDT} />}

        {sortedData.length === 0 && <SetIrriParamsForm CPOptions={CPOptions} onSubmit={calculateSchedule} />}

       </div>
  )
}
