import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
