
import { AppRouter } from "./routers/AppRouter";
import "swiper/css/bundle";



const App = () => {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-full bg-background_main">
      <AppRouter />
    </div>
  );
};

export default App;