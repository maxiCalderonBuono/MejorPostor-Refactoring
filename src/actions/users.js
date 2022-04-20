import toast from "react-hot-toast";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startEditUser = (userInfo) => {
  return async (dispatch) => {
    const res = await fetchConToken(`users/${userInfo.id}`, userInfo, "PUT");
    const body = await res.json();

    if (res.status === 200) {
      console.log(dispatch(editUser(body.updatedUser)));

      toast.success("Usuario actualizado");
    } else {
      toast.error(body.message);
    }
  };
};

const editUser = (userInfo) => ({
  type: types.editUser,
  payload: userInfo,
});
