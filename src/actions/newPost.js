import toast from "react-hot-toast";
import { fetchSinToken } from "../helpers/fetch";



export const createProduct = (productInfo) => {

  return async (dispatch) => {

    const duration = Date(productInfo.duration)
    
    const res = await fetchSinToken("products/", {...productInfo, duration, highestBid: productInfo.initialPrice}, "POST");
    const body = await res.json();
    if (res.status === 200) {
      toast.success("Publicación creada con éxito");
    } else {
      toast.error(body.message);
    }
  };
};

