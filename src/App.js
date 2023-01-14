import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import NavigationBar from "./components/NavigationBar.js";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState(["light", "Enable", "black"]);
  const toggleMode = () => {
    if (mode[0] === "light") {
      setMode(["dark", "Disable", "white"]);
      document.body.style.backgroundColor = "grey";
    } else {
      setMode(["light", "Enable", "black"]);
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavigationBar
        title="TextConvertor"
        mode={mode}
        toggleMode={toggleMode}
      />
      <br></br>
      <TextForm
        heading="Enter Text Below To Convert"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <br></br>
      <hr></hr>
      <About /> */}
    </>
  );
}
export default App;
