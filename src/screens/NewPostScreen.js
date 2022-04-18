import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ImHammer2 } from "react-icons/im";
import { AiOutlineFieldTime } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

import Button from "../components/atoms/Buttons/Button";
import * as styles from "../components/atoms/Buttons/buttonStyles";
import { useForm } from "../hooks/userForm";
import { createProduct } from "../actions/product";
import ImageLoader from "../components/atoms/ImageLoader";
import { Provincias } from "../assets/provincias";

const NewPostScreen = () => {
  
  const bidUser = "6259c3c04240cc9d55377ec4";

  const { id } = useSelector((state) => state.auth);

  const [picture, setPicture] = useState("https://res.cloudinary.com/dvqlenul5/image/upload/v1649438952/My01MTIucG5n_y7qiqn.png");
  

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    description: "",
    location: "",
    initialPrice: "",
    category: "",
    duration: "",
  });

  const {
    name,
    description,
    initialPrice,
    location,
    category,
    duration,
  } = formValues;

  const newAuction = {
    name,
    image: "HARDCODE",
    description,
    initialPrice,
    category,
    location,
    duration,
    id,
    bidUser,
  };

  const dispatch = useDispatch();

  const vence = new Date(`${duration}T00:00:00`).toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(newAuction, reset));
  };

  const handlePictureChange = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };

  useEffect(() => {
    async function getImageUrl() {
      if (picture) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(picture);
        fileReader.onload = () => {
          setPicture(fileReader.result);
        };
      }
    }
    getImageUrl();
  }, [picture]);

  return (
    <>
      <div className="w-3/4 p-8 mt-32 bg-white rounded-lg shadow-lg mb-14">
        <h3 className="block w-full mb-8 text-4xl font-bold">
          <ImHammer2 className="mr-1.5 inline-block" />
          Crear nueva subasta
        </h3>
        <div className="flex flex-row justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full mt-8"
          >
            <label
              htmlFor="name"
              className="w-5/6 text-2xl text-left text-text-primary"
            >
              Título
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
              placeholder="¿Qué deseas subastar?"
              className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-6 p-2 text-sm"
              onChange={handleInputChange}
              value={name}
            />

            <label
              htmlFor="description"
              className="w-5/6 text-2xl text-left text-text-primary"
            >
              Descripción
            </label>
            <input
              id="description"
              type="text"
              name="description"
              autoComplete="off"
              placeholder="Breve descripción del producto"
              className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-6 p-2 text-sm"
              onChange={handleInputChange}
              value={description}
            />

            <label
              htmlFor="category"
              className="w-5/6 text-2xl text-left text-text-primary"
            >
              Categoría
            </label>
            <select
              name="category"
              id="category"
              className="w-5/6 h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-6 p-2 text-sm"
              value={category}
              onChange={handleInputChange}
            >
              <option value="">Selecciona una categoria</option>
              <option value="Autos">Autos</option>
            </select>

            <label
              htmlFor="location"
              className="w-5/6 text-2xl text-left text-text-primary"
            >
              Ubicación
            </label>
            <select
              name="location"
              id="location"
              className="w-5/6 h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-6 p-2 text-sm"
              value={location}
              onChange={handleInputChange}
            >
              <option value="">Selecciona una provincia</option>
              {Provincias.map((provincia, index) => (
                <option key={index} value={provincia}>
                  {provincia}
                </option>
              ))}
            </select>

            <label
              htmlFor="initialPrice"
              className="w-5/6 text-2xl text-left text-text-primary"
            >
              Puja inicial ($)
            </label>
            <input
              id="initialPrice"
              type="number"
              name="initialPrice"
              autoComplete="off"
              placeholder="Precio inicial"
              className="w-5/6  h-10 border-2 border-solid outline-none border-text-secondary rounded-[43px] mb-6 p-2 text-sm"
              onChange={handleInputChange}
              value={initialPrice}
            />

            <div className="flex flex-col w-5/6 mb-6">
              <p className="w-5/6 mb-3 text-2xl text-left text-text-primary">
                Duración
              </p>
              <input
                type="date"
                name="duration"
                className="w-full border-2 border-solid outline-none border-text-secondary rounded-[43px] p-2 text-sm"
                onChange={handleInputChange}
                value={duration}
              />
            </div>
            <ImageLoader uploadPhoto = {handlePictureChange}/>
          
          
            <div className="flex w-full mt-5 justify-evenly">
              <Link to="/" className="w-1/3">
                <Button
                  styles={`${styles.DANGER_BUTTON} text-2xl w-full px-3 py-2`}
                  type="button"
                  content="Cancelar"
                />
              </Link>
              <Button
                styles={`${styles.SUCCESS_BUTTON} text-2xl w-1/3 px-3 py-2`}
                content="Publicar"
              />
            </div>
          </form>
          <div className="mt-8 items-center h-1/2 flex flex-col w-[360px] rounded-xl shadow-[3px_3px_2px_3px_rgba(0,0,0,0.25)] bg-white">
            <div
              className="flex flex-col items-center content-center w-full"
          
            >
              
                <img
                  src={picture}
                  className="rounded-[12px_12px_30px_30px] mb-3 w-full h-60 object-fit"
                  alt="product"
                />
             

              <h3 className="text-xl font-bold text-text-primary">{name}</h3>
              <div className="flex flex-row mt-2 space-x-2 text-text-secondary">
                <AiOutlineFieldTime />
                <span className="text-sm">
                 {`Vence el ${vence}`}
                </span>
              </div>
              <div className="flex flex-row mt-2 space-x-2 text-text-secondary">
                <SiGooglemaps />
                <span className={`${location ? "" : "hidden"} text-sm`}>
                  {location}
                </span>
              </div>
              <div className="flex items-center justify-center my-2 space-x-4 text-center">
                <p className="p-1 text-lg font-bold text-center">Puja actual</p>
                <p
                  className={`${
                    initialPrice ? "" : "hidden"
                  } p-1 text-lg font-bold text-danger`}
                >
                  {initialPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPostScreen;
