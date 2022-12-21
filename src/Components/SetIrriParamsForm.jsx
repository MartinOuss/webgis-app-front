import React from 'react'
import { useState } from 'react';


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
      <form className="bg-gray-200 p-4 rounded-md shadow-md" onSubmit={handleSubmit}>
        <label className="block font-bold mb-2 text-gray-700">
          Start date and time:
          <input className="form-input mt-1 block w-full" type="datetime-local" value={startDateTime} onChange={handleStartDateTimeChange} />
        </label>
        <br />
        <label className="block font-bold mb-2 text-gray-700">
          End date and time:
          <input className="form-input mt-1 block w-full" type="datetime-local" value={endDateTime} onChange={handleEndDateTimeChange} />
        </label>
        <br />
        <label className="block font-bold mb-2 text-gray-700">
        Select Connexion points:
        </label>
        <div className="block  w-full font-bold mb-2 text-gray-700 overflow-scroll">
        {CPOptions.map((option) => (
          <label key={option} >
            <input
              type="checkbox"
              value={option}
             checked={selectedOptions.includes(option)}
           onChange={handleOptionChange}
         />
    C.P-{option}
  <br/>
  </label>
  ))}

        </div>
       
  <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
        Submit
      </button>
    </form>

    );
  };
   
  

