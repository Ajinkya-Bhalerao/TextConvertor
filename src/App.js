import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import TextForm
 from "./components/TextForm";
function App() {
  return (
    <>
      <NavigationBar title="TextConvertor"/>
      <br></br>
      <div className="container">
        <TextForm  heading="Enter Text Below To Change it to UpperCase"/>
      </div>
    </>
  );
}

export default App;
