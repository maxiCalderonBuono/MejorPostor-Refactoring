import React from 'react'
import {  FaFileUpload } from "react-icons/fa"


const ImageLoader = (props) => {

  
  return (
    <div className="rounded-[12px_12px_30px_30px] mb-3 w-full h-52 object-fit flex flex-col items-center justify-center bg-sky-100  border-4 border-dashed border-light-blue hover:opacity-60" 
    onDrop= {(e)=>props.onDrop(e)}
    onDragEnter={props.onDragEnter}
    onDragLeave= {props.onDragLeave} 
    ref= {props.ref}  
   
  >
        <FaFileUpload size="50px" />
        <p className= "text-xl">Selecciona una imagen</p>
        <p className='text-sm'>O arrastra y suelta el archivo</p>

    </div>
  )
}

export default ImageLoader