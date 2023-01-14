import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <NavigationBar title="TextConvertor" />
      <br></br>
      <TextForm heading="Enter Text Below To Convert" />
    </>
  );
}
export default App;
