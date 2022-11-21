import React from 'react'
import { useState , useEffect} from 'react'
import {MapContainer, FeatureGroup, TileLayer } from "react-leaflet"
import {EditControl} from 'react-leaflet-draw'

// import "../src/App.css"

export const Map = () => {
  
  const [parcelCoords , getPolyCoords] = useState([]);
  const [parcelName , setParcelName] = useState('');
  const [ownerName , setOwnerName] = useState('');

  const handlePNChange = (e) => {setParcelName(e.target.value)};
  const handleOwChange = (e) => {setOwnerName(e.target.value)}
  const onCreate = (newParcel) => {console.log(newParcel)};

  const handleSubmit = (e) => {
    // 'in order not to submit data to another page'
    e.preventDefault()
    //  this alert still doesnt work ..........................................................?????
  
      onCreate(`${parcelName , ownerName , parcelCoords}`);
    
      setParcelName ('parcelName');
      setOwnerName ('ownerName');
    };

 
  const _onCreate = e =>{
    console.log(e)

   const {layerType , layer } = e ;

   if(layerType === 'polygon'){ 

    const {_leaflet_id} = layer ;

    
   
    // declare an empty array to store coordinates into then into the state after polygon creation 
     const coords = [];
     
     layer.getLatLngs()[0].forEach(element => {
      
      const coordLatLng = Object.values(element);
      
      // this line is for reversing lat and lng to be compatible with GeoJson format
      const coordLngLat = coordLatLng.reverse();
      coords.push(coordLngLat);

     });

     getPolyCoords((coordsArr)=>[... coordsArr ,{id : _leaflet_id, geometry:{type: layerType , coordinates : coords}}]);
     
   }

   

  };

  const _onEditPath = e =>{
    console.log(e)
  };
  const _onDeleted = e =>{
    console.log(e)
  }
  return (
    <div className="h-[400px] border border-black w-full mr-1 text-center">
      <MapContainer className="min-h-full" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            onEdited={_onEditPath}
            onCreated={_onCreate}
            onDeleted={_onDeleted}
            draw={{
              rectangle: false,
              circlemarker: false,
              marker: false,
              circle: false,
              polyline: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
      <div>
        <div className=" p-6 rounded-lg shadow-lg bg-white max-w-sm mt-2 ">
          <form>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Owner Name" onChange={handleOwChange}
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Parcel Name"  onChange = {handlePNChange}
              />
            </div>
            <div className="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck96"
              >
                I have read and agree to the terms
              </label>
            </div>
            <div className="hidden"></div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
           onSubmit={handleSubmit} >
              Save
            </button>
          </form>
        </div>

        {JSON.stringify(parcelCoords , parcelName , ownerName)}
        {JSON.stringify(parcelName)}
        {JSON.stringify(ownerName)}

      </div>
    </div>
  );
}
