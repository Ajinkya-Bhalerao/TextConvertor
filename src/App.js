import { useState } from "react";
import "./App.css";
import Alert from "./components/DisplayAlert";
// import About from "./components/About";
import NavigationBar from "./components/NavigationBar.js";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState(["light", "Enable", "black"]);
  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode[0] === "light") {
      setMode(["dark", "Disable", "white"]);
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled","success")
    } else {
      setMode(["light", "Enable", "black"]);
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success")
    }
  };
  return (
    <>
      <NavigationBar
        title="TextConvertor"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <br></br>
      <TextForm
        heading="Enter Text Below To Convert"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      {/* <br></br>
      <hr></hr>
      <About /> */}
    </>
  );
}
export default App;
