import React from 'react'





export const DTable = ({sortedData,dates}) => {

  
  return (
    <div className='flex justify-center max-h-[400px] md:w-full'>
    <div className="overflow-auto   mr-1 text-center p-2">
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

    </div>
  );
}
