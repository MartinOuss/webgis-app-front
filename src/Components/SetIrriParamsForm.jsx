import React from 'react'
import { useState } from 'react';


export const SetIrriParamsForm = ({ CPoptions, onSubmit, onFormSubmitted }) => {

 
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [options, setOptions] = useState([]);
  
    const handleStartDateTimeChange = (event) => {
      setStartDateTime(event.target.value);
    };
  
    const handleEndDateTimeChange = (event) => {
      setEndDateTime(event.target.value);
    };
  
    const handleOptionChange = (event) => {
      const options = [...event.target.options].filter((option) => option.selected).map((option) => option.value);
      setOptions(options);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(startDateTime, endDateTime, options);
      onFormSubmitted();
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
          Options:
          <select className="form-select mt-1 block w-full" multiple value={options} onChange={handleOptionChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
          Submit
        </button>
      </form>
    );
  };
   
  

