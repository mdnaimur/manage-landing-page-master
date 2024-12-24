import "./App.css";

import { Content } from "./pages/contents/Content";
import { Footer } from "./pages/Footer/Footer";
import { NavigationsHome } from "./pages/Navigations/NavigationsHome";
import { Review } from "./pages/Review/Review";
import { ReviewFotter } from "./pages/Review/ReviewFotter";

function App() {
  return (
    <>
      <div className="w-full font-BeVetnamPro">
        <NavigationsHome />
        <Content />
        <Review />
        <ReviewFotter />
        <Footer />
      </div>
    </>
  );
}

export default App;
