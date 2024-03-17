import React, { useEffect, useState } from "react";
import "./App.css";
import { DATA } from "./data";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Editor from "./components/Editor";
import { DisplayCV } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [formData, setFormData] = useState(DATA);

  const handleFormData = (newDataChange, idx) => {
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[idx] = newDataChange;
      return newFormData;
    });
  };

  return (
    <Container fluid className="app-container d-flex align-items-stretch">
      <Row className="">
        <Col sm="12" md="6" className="px-4">
          <Editor
            initialGeneralData={formData[0]}
            initialEducationData={formData[1]}
            initialExperienceData={formData[2]}
            onFormDataChange={handleFormData}
          />
        </Col>
        <Col sm="12" md="6" className="pdf-container px-5">
          <DisplayCV formData={formData}></DisplayCV>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
