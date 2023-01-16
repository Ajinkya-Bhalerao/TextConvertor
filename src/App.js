import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/DisplayAlert";
// import About from "./components/About";
import NavigationBar from "./components/NavigationBar.js";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState(["light", "Enable", "black"]);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode[0] === "light") {
      setMode(["dark", "Disable", "white"]);
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode(["light", "Enable", "black"]);
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <NavigationBar
        title="TextConvertor"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
        heading="Enter Text Below To Convert"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      <hr></hr>
      <About mode={mode} toggleMode={toggleMode}></About>
      {/* <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text Below To Convert"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes> */}
      {/* </Router> */}
    </>
  );
}
export default App;
