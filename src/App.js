import React from "react";

import { NavBar } from "./components/organisms/NavBar";
import ProductListContainer from "./components/organisms/ProductListContainer";
import RegisterScreen from "./components/organisms/auth/RegisterScreen";
import Button from "./components/atoms/Buttons/Button";
import * as styles from "./components/atoms/Buttons/buttonStyles";
import AppRouter from "./routers/AppRouter";

import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center w-full h-full p-8 md:h-full bg-background_main">
        {/*<NavBar />
      <ProductListContainer /> */}
        <Button styles={styles.PRIMARY_BUTTON} content="Login" />
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
