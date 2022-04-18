import {useRef} from 'react'
import {  FaFileUpload } from "react-icons/fa";
import toast from "react-hot-toast";


const ImageLoader = (props) => {
  
  const fileInput = useRef(null);
  const dragzone = useRef(null);

  const onDrop = (e) => {
    dragzone.current.classList.remove("opacity-60");
    toast.success("Imagen cargada con éxito");
  };

  const onDragEnter = () => {
    dragzone.current.classList.add("opacity-60");
  };

  const onDragOver = () => {
    dragzone.current.classList.add("opacity-60");
  };

  const onDragLeave = () => {
    dragzone.current.classList.remove("opacity-60");
  };

  
  return (
    <div className="rounded-[30px] relative mb-3 w-5/6 h-44 object-fit flex flex-col items-center justify-center bg-sky-50  border-4 border-dashed border-light-blue hover:opacity-60" 
    onDragEnter={onDragEnter}
    onDragLeave= {onDragLeave}
    onDrop={onDrop}
    onDragOver= {onDragOver}
    ref= {dragzone}
  >
      <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              multiple
              ref= {fileInput}
              className="absolute w-full h-full p-0 m-0 outline-none opacity-0"
              onChange={props.uploadPhoto}
            />
            
        <FaFileUpload size="50px" className='pointer-events-none' />
        <p className= "inline text-xl pointer-events-none">Selecciona una imagen</p>
        <p className='text-sm pointer-events-none'>O arrastra y suelta el archivo</p>

    </div>
  )
}

export default ImageLoader