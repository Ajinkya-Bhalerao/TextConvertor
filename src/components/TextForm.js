import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container">
      <h2>{props.heading}</h2>
      <Form>
        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            value={text}
            onChange={handleOnChange}
            rows={10}
          />
        </Form.Group>
      </Form>
      <button
        className="btn btn-primary"
        onClick={handleUpClick}
        style={{ marginRight: "5px" }}
      >
        Convert To UpperCase
      </button>
      <button
        className="btn btn-primary"
        onClick={handleLowerClick}
        style={{ marginLeft: "5px" }}
      >
        Convert To LowerCase
      </button>
    </div>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Enter Text Below" };
