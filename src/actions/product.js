import toast from "react-hot-toast";
import { fetchConToken } from "../helpers/fetch";

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

export const updateProduct = (bid, bidUser, _id, reset) => {

  console.log(_id)
  return async (dispatch) => {
    const res = await fetchConToken(`products/${_id}`,{ highestBid: bid, bidUser },"PUT");
    
    const body = await res.json();

    if (res.status === 200) {
      toast.success("Tu oferta fue enviada con éxito");
      reset();
    } else {
      console.log("Salio por el else")
      toast.error(body.message);
    }
  };
};

