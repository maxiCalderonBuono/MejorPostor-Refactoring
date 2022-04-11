import React from "react";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";




const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center w-full h-full md:h-full bg-background_main">
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
