import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [spCnt, setSpCnt] = useState(0);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.length === 0
      ? props.showAlert("Enter text To convert", "danger")
      : props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length === 0? props.showAlert("Enter text To convert", "danger"):
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearClick = () => {
    setText("");
    setSpCnt(0);
    text.length === 0
      ? props.showAlert("Nothing to Clear", "danger")
      : props.showAlert("Text Cleared", "success");
  };
  const handleCopyClick = () => {
    if (text.length === 0) {
      props.showAlert("Enter Text to be Copied", "danger");
    } else {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied", "success");
    }

    //******************* Code For Toast *******************
    // if (text.length === 0) {
    //   return toast.error("Enter Text to be copied", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2000,
    //   })
    // }
    // else{
    //     navigator.clipboard.writeText(text)
    //     return toast.success("Text Copied", {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 2000,
    //     });
    // }
  };
  const handleSpClick = () => {
    let specialChar = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    text.length === 0 ? setSpCnt(0) : setSpCnt(text.match(specialChar).length);
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
              rows={8}
            />
          </Form.Group>
        </Form>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          } my-1`}
          onClick={handleUpClick}
          style={{ marginRight: "5px" }}
          disabled={text.length===0}
        >
          Convert To UpperCase
        </button>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          } my-1`}
          onClick={handleLowerClick}
          disabled={text.length===0}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          Convert To LowerCase
        </button>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          } my-1`}
          onClick={handleClearClick}
          disabled={text.length===0}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          Clear
        </button>
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          } my-1`}
          onClick={handleCopyClick}
          disabled={text.length===0}
          style={{ marginLeft: "5px", marginRight: "5px" }}
        >
          Copy
        </button>
        {/* Code for Toast */}
        {/* <ToastContainer /> */}
        <button
          className={`btn btn-${
            props.mode[0] === "light" ? "primary" : "dark"
          } my-1`}
          onClick={handleSpClick}
          disabled={text.length===0}
          style={{ marginLeft: "5px" }}
        >
          Special Characters
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode[2] }}>
        <hr style={{ borderWidth: "3px" }} />
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((e)=> e.length!==0).length} words</p>
        <p>{text.length} Characters</p>
        <p>{spCnt} Special Characters</p>
        <hr style={{ borderWidth: "3px" }} />
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter in above textbox to preview"}</p>
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
