import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";
import { startIsAuth } from "./actions/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startIsAuth());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-full bg-background_main">
      <AppRouter />
    </div>
  );
};

export default App;
