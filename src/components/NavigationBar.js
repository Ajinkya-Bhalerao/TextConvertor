import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function NavigationBar(props) {
  return (
    <>
      <Navbar bg={props.mode[0]} variant={props.mode[0]} expand="lg">
        <Container fluid>
          <Navbar.Brand>{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>Home
                {/* <Link to="/">Home</Link> */}
              </Nav.Link>
              <Nav.Link> {props.about}
                {/* <Link to="/about">{props.about}</Link> */}
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Form className="d-flex">
              <Form.Check
                type="switch"
                id="custom-switch"
                label={`${props.mode[1]} Dark Mode`}
                onClick={props.toggleMode}
                style={{ color: props.mode[2] }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// handling props efficiently this will help to identify error if props are not passed and to set the default values
NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.array.isRequired,
};

// We have not passed About prop from APP.js therefor it will take default value of about=About and display.
NavigationBar.defaultProps = {
  title: "Set Title",
  about: "About",
  mode: ["light", "Enable", "black"],
};
