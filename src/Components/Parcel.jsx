import React from 'react'
import { useState , useEffect} from 'react'
import { TiDelete } from 'react-icons/ti'



export const Parcel = (props) => {


  const handleDelete = () => {
    console.log(props.parcelId);
    
   props.onDelete(props.parcelId);
  }

  return (
    <tr className="border">
      <td className="">{props.parcelId}</td>
      <td className="">{props.parcelOwner}</td>
      <td className="">{props.nodeNumber}</td>
      <td className="">{props.duration}</td>
      <td className="">{props.rendezVous}</td>
      <td>
      <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDelete}>
  <TiDelete />
</button>
      </td>
    </tr>
  );
}
