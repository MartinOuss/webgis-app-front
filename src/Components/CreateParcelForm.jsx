import React from 'react'

export const CreateParcelForm = () => {
  return (
    <div>
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
            <div className="hidden" >
              <input type="text" defaultValue = {parcelCoords}/>
            </div>
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
      </div>
    </div>
  )
}
