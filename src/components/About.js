import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
    padding: "5px"
  });
  const [toggle, setToggle] = useState(true);
  const [buttonValue, setButtonValue] = useState("Enable Dark Mode")
  const EnableDisableDarkMode = () => {
    toggle
      ? setMyStyle({ backgroundColor: "#312929", color: "white", padding: "5px" })
      : setMyStyle({ backgroundColor: "white", color: "black", padding: "5px" });
    toggle
    ? setButtonValue("Disable Dark Mode")
    : setButtonValue("Enable Dark Mode")
    setToggle(!toggle);
  };

  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h4>About US - Learning to toggle dark mode</h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" style={myStyle}>
            <Accordion.Header>Accordion Item</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="container my-2" style={{marginBottom: "10px",marginLeft: "-12px"}}>
          <button className="btn btn-primary" onClick={EnableDisableDarkMode}>
            {buttonValue}
          </button>
        </div>
      </div>
    </>
  );
}
