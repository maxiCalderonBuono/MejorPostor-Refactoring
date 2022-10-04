import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components";
import * as styles from "../components/atoms/Buttons/buttonStyles";

export const EmailVerificationPage = () => {
  const token = localStorage.getItem("token");

  const PATHS = {
    root: "/",
    auth: "/auth",
  };

  return (
    <section className="flex flex-col items-center min-h-screen px-8 bg-light-gray">
      <div className="flex items-center justify-center w-full pt-10 pb-24 lg:justify-start lg:py-6">
        <Link to="/">
          <Logo theme={"dark"} className="text-2xl md:text-3xl" />
        </Link>
      </div>
      <div className="w-full flex-col flex gap-8 items-center justify-center lg:max-w-[1080px]">
        <img
          src="https://res.cloudinary.com/dvqlenul5/image/upload/v1664804091/email-illustration_efaq8g.png"
          className="w-80"
          alt="email illustration"
        />
        <p className="text-2xl text-center lg:text-3xl text-silver-sand">
          Your email has been verified
        </p>
        <p className="text-center lg:text-lg text-black-white">
          Your email address has been verified. You're all set to make some bet
          with Mejor Postor.
        </p>

        <Link
          to={token ? PATHS.root : PATHS.auth}
          className={`${styles.PRIMARY_BUTTON} lg:px-8 py-4 px-6`}
        >
          <span className="block text-sm">Continue to Dashboard</span>
        </Link>
      </div>
    </section>
  );
};
