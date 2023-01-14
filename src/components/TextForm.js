import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [spCnt, setSpCnt] = useState(0);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
    setSpCnt(0);
  };
  const handleSpClick = () => {
    let specialChar = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    setSpCnt(text.match(specialChar).length);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h2 style={{ color: props.mode[2] }}>{props.heading}</h2>
        <Form>
          <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              value={text}
              style={{
                backgroundColor:
                  props.mode[0] === "light" ? "white" : "#0e101acf",
                color: props.mode[0] === "light" ? "black" : "white",
              }}
              onChange={handleOnChange}
              rows={10}
            />
          </Form.Group>
        </Form>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          }`}
          onClick={handleUpClick}
          style={{ marginRight: "5px" }}
        >
          Convert To UpperCase
        </button>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          }`}
          onClick={handleLowerClick}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          Convert To LowerCase
        </button>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          }`}
          onClick={handleClearClick}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          Clear
        </button>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          }`}
          onClick={handleSpClick}
          style={{ marginLeft: "5px" }}
        >
          Special Characters
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode[2] }}>
        <hr style={{borderWidth:'3px'}}/>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} Characters</p>
        <p>{spCnt} Special Characters</p>
        <hr style={{borderWidth:'3px'}}/>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter in above textbox to preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.array.isRequired,
};
TextForm.defaultProps = {
  heading: "Enter Text Below",
  mode: ["light", "Enable", "black"],
};
