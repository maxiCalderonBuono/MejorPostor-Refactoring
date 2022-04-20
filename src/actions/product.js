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

export const updateProduct = (bid, id, bidUser, reset) => {
  return async (dispatch) => {
    const res = await fetchConToken(
      `products/${id}`,
      { highestBid: bid },
      "PUT"
    );
    const body = await res.json();

    if (res.status === 200) {
      toast.success("Tu oferta fue enviada con éxito");
      reset();
    } else {
      toast.error(body.message);
    }
  };
};

