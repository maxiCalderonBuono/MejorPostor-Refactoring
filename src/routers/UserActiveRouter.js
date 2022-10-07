import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { mejorPostorApi } from "../api";
import { Spinner } from "../components/atoms/Spinner";
import { EmailErrorVerificationPage } from "../pages/EmailErrorVerificationPage";
import { EmailVerificationPage } from "../pages/EmailVerificationPage";

export const UserActiveRouter = () => {
  const [isLoading, setisLoading] = useState(true);
  const [status, setStatus] = useState("");

  const { userId, uniqueString } = useParams();

  useEffect(() => {
    const userState = async () => {
      try {
        const data = await mejorPostorApi(
          `auth/verify/${userId}/${uniqueString}`
        );
        if (data.status === 200) {
          setStatus("verified");
          setisLoading(false);
        }
      } catch (error) {
        setStatus(error.response.data.message);
        setisLoading(false);
      }
    };

    userState();
  }, [userId, uniqueString]);

  if (isLoading) return <Spinner />;

  return status === "verified" ? (
    <EmailVerificationPage />
  ) : (
    <EmailErrorVerificationPage error={status} />
  );
};
