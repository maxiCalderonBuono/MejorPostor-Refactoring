import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startEditUser } from "../actions/users";

import Button from "../components/atoms/Buttons/Button";
import * as styles from "../components/atoms/Buttons/buttonStyles";

export const EditProfileScreen = () => {
  const dispatch = useDispatch();
  const { username: usernam, id, email } = useSelector((state) => state.auth);

  const [username, setUsername] = useState(usernam);
  const [emailchange, setEmail] = useState(email);
  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
  );
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  useEffect(() => {
    async function getImageUrl() {
      if (avatar) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(avatar);
        fileReader.onload = () => {
          setAvatar(fileReader.result);
        };
      }
    }
    getImageUrl();
  }, [avatar]);
  const navigate = useNavigate();
  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    // const avatarURI = avatar ? await uploadimageFunction(avatar) : avatarUrl;
    if (!name || !surname || !username) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const profileUpdated = {
      id,
      username,
      email,
      avatar: "TODO: Subir avatar",
      name,
      surname,
      birthYear: 1980,
    };

    if (profileUpdated) {
      dispatch(startEditUser(profileUpdated));
      const toastload = toast.loading("Actualizando perfil...");
      navigate("/");
      toast.dismiss(toastload);
    }
    // const res = await updateProfile(profileUpdated);

    // if (res.data.ok) {
    //   navigate(`/`);
    // } else {
    //   console.log("error")
    // }
  };
  return (
    <>
      <div className="flex flex-col w-1/2 mb-8 mt-28">
        <div className="container p-8 my-5 bg-white rounded-lg shadow-lg">
          <h1 className="p-2 mb-4 text-4xl font-bold text-center text-black md:text-5xl">
            Editar perfil
          </h1>
          <form className="" onSubmit={handleSubmitEdit}>
            <div className="row">
              <div className="flex items-center justify-center ">
                <img
                  src={avatar}
                  alt="avatar"
                  style={{
                    width: "8rem",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <input
                  className="ml-3"
                  id="fileAvatarid"
                  name="fileAvatarid"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-center my-3">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="username"
                placeholder={username || "Nombre de usuario"}
                value={username}
                id="username"
                type="text"
                onChange={handleUsernameChange}
              />
            </div>
            <div className="flex items-center justify-center my-3">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="email"
                placeholder={emailchange || "Email"}
                value={emailchange}
                id="email"
                type="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex items-center justify-center my-3">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="name"
                placeholder={name || "Nombre"}
                value={name}
                id="name"
                type="text"
                onChange={handleNameChange}
              />
            </div>
            <div className="flex items-center justify-center my-3">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="surname"
                placeholder={surname || "Apellido"}
                value={surname}
                id="surname"
                type="text"
                onChange={handleSurnameChange}
              />
            </div>
            <div className="flex mt-5 justify-evenly">
              <Link to="/">
                <Button
                  styles={`${styles.DANGER_BUTTON} px-3 py-2`}
                  type="button"
                  content="Cancelar"
                />
              </Link>
              <Button
                styles={`${styles.SUCCESS_BUTTON} px-3 py-2`}
                content="Guardar"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};