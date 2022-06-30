import "./grid.css";
import "./App.css";

import MainComponent from "./Components/Header/Header";
import { useSelector } from "react-redux";
function App() {
  
  // console.log(useSelector((state) => state));
  return (
    <div className="App grid">
      <MainComponent />
    </div>
  );
}

export default App;
