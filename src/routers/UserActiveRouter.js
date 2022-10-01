import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { mejorPostorApi } from "../api";

export const UserActiveRouter = (props) => {
  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    const userState = async () => {
      try {
        const { data } = await mejorPostorApi(`auth/verify/${param.uid}`);

        if (data.status === 200) {
          console.log(`data:`, data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    userState();
  }, [dispatch, param.uid]);

  return <Navigate to="/" />;
};
