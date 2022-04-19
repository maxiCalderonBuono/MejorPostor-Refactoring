import toast from "react-hot-toast";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

export const createProduct = (newAuction, reset) => {
  return async (dispatch) => {
    const duration = Date(newAuction.duration);

    const res = await fetchConToken(
      "products/",
      { ...newAuction, duration, highestBid: newAuction.initialPrice },
      "POST"
    );
    const body = await res.json();

    if (res.status === 200) {
      toast.success("Publicación creada con éxito");
      reset();
    } else {
      toast.error(body.message);
    }
  };
};
