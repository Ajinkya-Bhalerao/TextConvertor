import React from "react";
import { Alert } from "react-bootstrap";
export default function DisplayAlert(props) {

  const Capitalize = (word) =>{
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase()+ lower.slice(1)
  }
  return (
    props.alert && (
      <div>
        <Alert key={props.alert.type} variant={props.alert.type}>
          {Capitalize(props.alert.type)}: {props.alert.msg}
        </Alert>
      </div>
    )
  );
}
