import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../components/atoms/Buttons/Button";
import * as styles from "../components/atoms/Buttons/buttonStyles";
import Footer from "../components/organisms/Footer";
import { NavBar } from "../components/organisms/NavBar";

export const EditProfileScreen = () => {
  const { username: usernam, id } = useSelector((state) => state.auth);

  const [username, setUsername] = useState(usernam);
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/di57h1uhf/image/upload/v1648590723/Mejor%20postor/circle-user-solid_abtmjp.png"
  );
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
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

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log("submit");

    // const avatarURI = avatar ? await uploadimageFunction(avatar) : avatarUrl;

    const profileUpdated = {
      id,
      username,
      password: newPassword,
      email,
      avatar: "avatarURI",
      name: "hardcoded",
      surname: "hardcoded",
      birthYear: 1980,
    };
    console.log(profileUpdated);
    // const res = await updateProfile(profileUpdated);

    // if (res.data.ok) {
    //   navigate(`/`);
    // } else {
    //   console.log("error")
    // }
  };
  return (
    <>
      <div className="mt-40 mb-[17rem] flex flex-col">
        <NavBar />
        <div className="container bg-white my-5 rounded-lg p-8 shadow-lg">
          <h1 className="text-black text-center text-4xl p-2 font-bold md:text-5xl mb-4">
            Editar perfil
          </h1>
          <form className="" onSubmit={handleSubmitEdit}>
            <div className="row">
              <div className="flex items-center justify-center ">
                <img
                  src={avatar}
                  alt="avatar"
                  style={{
                    width: "10rem",
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
            <div className="flex my-3 items-center justify-center">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="username"
                placeholder={username || "Nombre de usuario"}
                value={username}
                id="username"
                type="text"
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="flex my-3 items-center justify-center">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="email"
                placeholder={email || "Email"}
                value={email}
                id="email"
                type="email"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="flex my-3 items-center justify-center">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="newpassword"
                placeholder={newPassword || "Nueva contraseña"}
                value={newPassword}
                id="newpassword"
                onChange={handlePasswordChange}
                required
                type="password"
              />
            </div>
            <div className="flex my-3 items-center justify-center">
              <input
                className="w-full text-center rounded-lg focus:outline-none focus:border-2 focus:border-[#14ACDE] bg-background_main"
                name="passwordActual"
                placeholder="Pone tu contraseña actual para confirmar los cambios"
                id="passwordActual"
              />
            </div>
            <div className="flex justify-between mt-5">
              <Link to="/">
                <Button
                  styles={`${styles.DANGER_BUTTON} p-2`}
                  type="button"
                  content="Cancelar"
                />
              </Link>
              <Button
                styles={`${styles.SUCCESS_BUTTON} p-2 `}
                content="Guardar cambios"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
