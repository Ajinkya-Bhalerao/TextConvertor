import "./App.css";
import About from "./components/About";
import NavigationBar from "./components/NavigationBar.js";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <NavigationBar title="TextConvertor" />
      <br></br>
      <TextForm heading="Enter Text Below To Convert" />
      <br></br>
      <hr></hr>
      <About />
    </>
  );
}
export default App;
