import React from 'react'
import {Map} from '../Components/Map'
// import {dTable} from '../Components/dTable'

export const Dashboard = () => {
  return (
    <div className='w-full p-2 bg-slate-100 flex flex-col md:flex-row  justify-items' > 
      <div className=' border border-black w-full mr-1 text-center'>
        <Map />
      </div>

      <div className='border border-black w-full mr-1 text-center'>
      {/* this is still not working */}
       {/* <dTable></dTable> */}

      </div>
    </div>
  )
}
