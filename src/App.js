import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";
import { startIsAuth } from "./actions/auth";
import ProductDetail from "./components/moleculs/ProductDetail";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startIsAuth());
  }, [dispatch]);

  return (
    <ProductDetail />
  );
};

export default App;
