import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";
import { startIsAuth } from "./actions/auth";

const App = () => {
  const dispatch = useDispatch();

  const {ModalLogin} = useSelector((state) => state.ui);

  useEffect(() => {

    if(!ModalLogin){
      dispatch(startIsAuth());
    }
  }, [dispatch, ModalLogin]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-full bg-background_main">
      <AppRouter />
    </div>
  );
};

export default App;
