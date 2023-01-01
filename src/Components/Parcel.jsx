import React from 'react'
import { useState , useEffect} from 'react'
import { TiDelete } from 'react-icons/ti'



export const Parcel = (props) => {


  const handleDelete = () => {
    console.log(props.parcelId);
    
   props.onDelete(props.parcelId);
  }

  return (
    <tr>
      <td className="border border-slate-700">{props.parcelId}</td>
      <td className="border border-slate-700">{props.parcelOwner}</td>
      <td className="border border-slate-700">{props.nodeNumber}</td>
      <td className="border border-slate-700">{props.duration}</td>
      <td className="border border-slate-700">{props.rendezVous}</td>
      <td>
      <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDelete}>
  <TiDelete />
</button>
      </td>
    </tr>
  );
}
