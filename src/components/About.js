import Accordion from "react-bootstrap/Accordion";

export default function About(props) {
  return (
    <>
      <div className="container my-3" style={{ color: props.mode[2] }}>
        <h4>About US</h4>
        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            style={{
              backgroundColor:
                props.mode[0] === "light" ? "white" : "#0e101acf",
              color: props.mode[0] === "light" ? "black" : "white",
            }}
          >
            <Accordion.Header>Text Analyzer</Accordion.Header>
            <Accordion.Body>
              This Text Converter will help you to transform your text quickly
              and its easy to use
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            style={{
              backgroundColor:
                props.mode[0] === "light" ? "white" : "#0e101acf",
              color: props.mode[0] === "light" ? "black" : "white",
            }}
          >
            <Accordion.Header>Browser Compatible</Accordion.Header>
            <Accordion.Body>
              This Application can be used in mobile as well as on laptops and
              supports multiple browsers as well.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}