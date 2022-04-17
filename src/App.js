import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";
import { Provider } from "react-redux";


const App = () => {

  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center w-full h-full md:h-full bg-background_main">
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
