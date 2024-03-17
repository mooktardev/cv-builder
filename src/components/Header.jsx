import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { ExportPDF } from "./";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="./logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            CV Builder
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <ExportPDF />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
