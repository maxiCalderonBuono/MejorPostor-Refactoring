import React from "react";
import { Provider } from "react-redux";
import ProductListContainer from "./components/moleculs/Cards/ProductListContainer";

import { store } from "./store/store"
import AppRouter from "./routers/AppRouter";

import "swiper/css/bundle"
import { NavBar } from "./components/organisms/NavBar";


const App = () => {
  return (
    <Provider store={store}>
      <div className="flex justify-center w-full h-full p-8 md:h-full bg-background_main">
       <NavBar />
        <ProductListContainer />
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
