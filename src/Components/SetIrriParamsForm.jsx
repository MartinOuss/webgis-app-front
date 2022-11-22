import React from 'react'
import { useState } from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import DatePicker from "react-datepicker";

export const SetIrriParamsForm = () => {

const [startDate, setStartDate] = useState(new Date());
  return (
        <div className="w-full h-full flex items-center justify-center p-6 rounded-lg shadow-lg bg-white max-w-sm mt-1 ">
  <div className=" relative form-floating mb-3 xl:w-96" >
  <input type="date" />
   

    <button className="" >
      {/* <i className="fas fa-calendar datepicker-toggle-icon"> <BsFillCalendarCheckFill/></i> */}
    </button>
  </div>
</div>
   
  )
}
