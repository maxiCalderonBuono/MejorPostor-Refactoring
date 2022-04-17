import React from 'react'
import {  FaFileUpload } from "react-icons/fa"


const ImageLoader = (props) => {


  
  return (
    <div className="rounded-[30px] relative mb-3 w-5/6 h-44 object-fit flex flex-col items-center justify-center bg-sky-50  border-4 border-dashed border-light-blue hover:opacity-60" 
    onDragEnter={props.onDragEnter}
    onDragLeave= {props.onDragLeave}
    onDrop={props.onDrop}
    onDragOver= {props.onDragOver}
    ref= {props.reference}
  >
      <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              multiple
              ref= {props.inputRef}
              className="absolute w-full h-full p-0 m-0 outline-none opacity-0"
              onChange={props.action}
              onDragEnter={props.onDragEnter}
              onDragLeave= {props.onDragLeave}
              onDrop={props.onDrop}
            />
        <FaFileUpload size="50px" className='pointer-events-none' />
        <p className= "inline text-xl pointer-events-none">Selecciona una imagen</p>
        <p className='text-sm pointer-events-none'>O arrastra y suelta el archivo</p>

    </div>
  )
}

export default ImageLoader