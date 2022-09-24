import ProductListContainer from "../moleculs/ProductListContainer";
import { Link } from "react-router-dom";
import Loader from "../moleculs/Loader";

const Novedades = (props) => {
  return (
    <div className="mt-20 md:min-w-full">
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-2">
          <h3 className="text-4xl font-bold md:text-5xl text-start">
            Novedades
          </h3>
        </div>

        <div className="col-span-2 mt-4">
          <p className="text-start text-slate-400">Subastas recién creadas</p>
        </div>
      </div>

      {props.loading ? (
        <Loader />
      ) : (
        <ProductListContainer products={props.data} />
      )}
    </div>
  );
};

export default Novedades;
