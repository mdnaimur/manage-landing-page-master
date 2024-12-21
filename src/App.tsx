import "./App.css";

import { Content } from "./pages/contents/Content";
import { NavigationsHome } from "./pages/Navigations/NavigationsHome";
import { Review } from "./pages/Review/Review";
import { ReviewFotter } from "./pages/Review/ReviewFotter";

function App() {
  return (
    <>
      <div className="">
        <NavigationsHome />
        <Content />
        <Review />
        <ReviewFotter />
      </div>
    </>
  );
}

export default App;
