import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { fetchSinToken } from "../helpers/fetch";
import { uiOpenLogin } from "../actions/modal";

export const UserActiveRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    userState();
  }, []);

  const param = useParams();

  const userState = async () => {
    const data = await fetchSinToken(`auth/verify/${param.uid}`);
  
    if (data.status === 200) {
      toast.success("Tu cuenta ha sido verificada de forma correcta. Inicia sesión");
      dispatch(uiOpenLogin());
    } else {
      toast.error("No hemos podido verificar tu cuenta");
    }
  };

  return <Navigate to="/" />;
};
