import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { fetchSinToken } from "../helpers/fetch";

export const UserActiveRouter = (props) => {
  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    const userState = async () => {
      try {
        const data = await fetchSinToken(`auth/verify/${param.uid}`);

        if (data.status === 200) {
          toast.success(
            "Tu cuenta ha sido verificada de forma correcta. Inicia sesión"
          );
        }
      } catch (err) {
        console.error(err);
        toast.error("No hemos podido verificar tu cuenta");
      }
    };

    userState();
  }, [dispatch, param.uid]);

  return <Navigate to="/" />;
};
