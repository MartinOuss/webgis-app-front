import React from 'react'
import { useState } from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import Moment from 'react-moment'
import moment from 'moment';

export const SetIrriParamsForm = () => {

const [startDate, setStartDate] = useState(new Date());
  return (
        <div className=" flex flex-col w-full h-full justify-center p-6 rounded-lg shadow-lg bg-white max-w-sm mt-1 ">
  <div>
    <Moment format="YYYY-MM-DD HH:mm"></Moment>
   
  </div>
  <div className=" relative items-center form-floating mb-3 xl:w-96" >
  <input type="date" />
   

    <button className="" >
  
    </button>
  </div>
</div>
   
  )
}
