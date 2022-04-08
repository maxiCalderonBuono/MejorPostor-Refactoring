import React from "react";

import { ImHammer2 } from "react-icons/im";
import { useFetch } from "../hooks/useFetch";

const NewPostScreen = () => {
  const URL = "https://apis.datos.gob.ar/georef/api/provincias";

  const { data, loading, error } = useFetch(URL);

  const {provincias} =data
 
  console.log(data)
 
  return (
    <div className="w-full h-screen">
      <h3 className="block w-full text-4xl font-bold mt-28 md:text-6xl">
        <ImHammer2 className="mr-1.5 inline-block" />
        Crear nueva subasta
      </h3>
      <div>
        <label htmlFor="title" className="w-5/6 text-left t text-text-primary">
          Título
        </label>
        <input
          id="title"
          type="text"
          name="title"
          autoComplete="off"
          placeholder="¿Qué deseas subastar?"
          className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
          onChange={""}
          value={""}
        />

        <label
          htmlFor="location"
          className="w-5/6 text-left t text-text-primary"
        >
          <select name="location" id="location">
            <option value="">--Please choose an option--</option>
            {provincias.map(provincia => (
              <option key={provincia.id} value={provincia.nombre}>{provincia.nombre}</option>
            ))}
          </select>
        </label>

        <label htmlFor="price" className="w-5/6 text-left t text-text-primary">
          Título
        </label>
        <input
          id="price"
          type="text"
          name="price"
          autoComplete="off"
          placeholder="Precio inicial"
          className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
          onChange={""}
          value={""}
        />
        <label htmlFor="image" className="w-5/6 text-left t text-text-primary">
          Título
        </label>
        <input
          id="image"
          type="file"
          name="image"
          autoComplete="off"
          placeholder="Subí una imagen"
          className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-4 p-2 text-sm"
          onChange={""}
          value={""}
        />
      </div>
    </div>
  );
};

export default NewPostScreen;
