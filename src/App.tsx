import "./App.css";

import { Content } from "./pages/contents/Content";
import { NavigationsHome } from "./pages/Navigations/NavigationsHome";
import { Review } from "./pages/Review/Review";

function App() {
  return (
    <>
      <div className="">
        <NavigationsHome />
        <Content />
        <Review />
      </div>
    </>
  );
}

export default App;
