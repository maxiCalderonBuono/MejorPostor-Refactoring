import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

import "swiper/css/bundle";
import { startIsAuth } from "./actions/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startIsAuth());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="flex justify-center w-full h-full p-8 md:h-full bg-background_main">
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
