import React from 'react'
import { useState } from 'react';
import 'tw-elements';


export const SetIrriParamsForm = ({ CPOptions, onSubmit }) => {

    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    console.log(selectedOptions);
    console.log(startDateTime);
    console.log(endDateTime);


  
    const handleStartDateTimeChange = (event) => {
      setStartDateTime(event.target.value);
    };
  
    const handleEndDateTimeChange = (event) => {
      setEndDateTime(event.target.value);
    };
  
    const handleOptionChange = (event) => {
      const option = event.target.value;
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(startDateTime, endDateTime, selectedOptions);
     
    };
  
    return (
      <div className='flex items-center justify-center md:w-1/2 mx-2'>
      <form className=" bg-gray-200 p-4 mx-auto my-auto rounded-md shadow-md" onSubmit={handleSubmit}>
        <label className="flex flex-col items-center justify-center font-bold mb-2 text-gray-700">
          Start date and time:
          <input className="form-input mt-2 block w-full" id="#datetime-input" type="datetime-local" value={startDateTime} onChange={handleStartDateTimeChange} />
        </label>
        <br />
        {/* <label className="block font-bold mb-2 text-gray-700">
          End date and time:
          <input className="form-input mt-1 block w-full" type="datetime-local" value={endDateTime} onChange={handleEndDateTimeChange} />
        </label> */}
        
   
        <br />
        <label className="flex justify-center font-bold mb-2 text-gray-700">
        Select Connexion points:
        </label>
        <div className="flex-col font-bold mt-2 mb-2 text-gray-700 overflow-auto">
        {CPOptions.map((option) => (
        //   <label key={option} >
                     
        //     <input
        //       type="checkbox"
        //       value={option}
        //      checked={selectedOptions.includes(option)}
        //    onChange={handleOptionChange}
        //  />
        <label  key={option} htmlFor={`flexSwitchCheckDefault ${option}`} className ="form-check form-switch m-2">
    <input value={option} type="checkbox" className="form-check-input" id ={`flexSwitchCheckDefault ${option}`} role="switch"  checked={selectedOptions.includes(option)}
      onChange={handleOptionChange}/>
    <span className="slider-round"></span>
   <div>
   C.P-{option}
    </div>

   
<br/>
  </label>
         
        
  
  ))}

        </div>
       
  <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-full" type="submit">
        Start Schedule
      </button>
    </form>

    
    </div>

    );
  };
   
  

