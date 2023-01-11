import React from 'react';
import { Parcel } from './Parcel';

export const DTable = ({sortedData,dates, onUpdateinDB}) => {

  const handleDelete = (parcelId) => {
    // Delete the row with the corresponding parcelId
    console.log(`${parcelId} is deleted!`)
    onUpdateinDB(parcelId);
    
  }

  
  return (
    <div className='flex justify-center h-full md:w-full'>
    <div className="overflow-y-scroll  mr-1 text-center ">
      <table className=" table-fixed border-collapse border-spacing-2 rounded border border-slate-500  w-full ">
        <thead className="sticky top-0 bg-slate-500 text-white h-1">
          <tr className='border border-slate-600'>
            <th className="p-2 ">Parcel ID</th>
            <th className="p-2">Parcel owner</th>
            <th className="p-2">Connection point (C.P)</th>
            <th className="p-2">Duration (min)</th>
            <th className="p-2">Rendez-Vous</th>
            <th className="p-2">Delete?</th>


          </tr>
        </thead>
        <tbody className="p-1 mt-2 w-full">
         
         

{sortedData.map((parcel, i) => (
          <Parcel
            key={i}
            parcelId={parcel.properties.id}
            parcelOwner={parcel.properties.owner_name}
            nodeNumber={parcel.properties.node_num}
            duration={Math.round(parcel.properties.IrriDur)}
            rendezVous={dates.length > 0 && dates[i].rendezVous.toLocaleString()}
            onDelete={handleDelete}
          />
        ))}
        </tbody>
      </table>
      </div>

    </div>
  );
}
