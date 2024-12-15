import "./App.css";

import { Content } from "./pages/contents/Content";
import { NavigationsHome } from "./pages/Navigations/NavigationsHome";

function App() {
  return (
    <>
      <div className=" ">
        <NavigationsHome />
        <Content />
      </div>
    </>
  );
}

export default App;
