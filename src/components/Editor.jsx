import React from "react";
import { Accordion, Container, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { General, Education, Experience, Header } from "./";

function Editor({
  initialGeneralData,
  initialEducationData,
  initialExperienceData,
  onFormDataChange,
}) {
  return (
    <Container className="mt-3 d-flex flex-column align-items-strech">
      <Header />
      <Row className="my-4">
        <Accordion defaultActiveKey={["0"]} flush>
          <Accordion.Item eventKey="0" className="bg-light">
            <Accordion.Header>
              <FontAwesomeIcon icon={faAddressCard} className="me-2" />{" "}
              Personnal Info
            </Accordion.Header>
            <Accordion.Body>
              <General
                initialGeneralData={initialGeneralData}
                onFormDataChange={onFormDataChange}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="bg-light mt-4 mb-4">
            <Accordion.Header>
              <FontAwesomeIcon icon={faGraduationCap} className="me-2" />{" "}
              Education
            </Accordion.Header>
            <Accordion.Body>
              <Education
                initialEducationData={initialEducationData}
                onFormDataChange={onFormDataChange}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="bg-light">
            <Accordion.Header>
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Experience
            </Accordion.Header>
            <Accordion.Body>
              <Experience
                initialExperienceData={initialExperienceData}
                onFormDataChange={onFormDataChange}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row className="justify-content-end">
        <p className="text-center">
          &copy;{new Date().getFullYear()} - built with 💗 by{" "}
          <a href="http://github.com/mooktadev" target="_blank">
            Mooktar Dev
          </a>.
        </p>
      </Row>
    </Container>
  );
}

export default Editor;
