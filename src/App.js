import React from "react";
import { Provider } from "react-redux";

import { NavBar } from "./components/organisms/NavBar";
import ProductListContainer from "./components/moleculs/Cards/ProductListContainer";
import Novedades from "./components/organisms/Novedades";
import MainScreen from "./screens/MainScreen";

import { store } from "./store/store"
import {AppRouter} from "./routers/AppRouter";

import "swiper/css/bundle"




const App = () => {
  return (
    <Provider store={store}>
      <div className="flex justify-center w-full h-full p-8 md:h-full bg-background_main">

        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
