import {
  faBriefcase,
  faEnvelope,
  faFileWord,
  faGraduationCap,
  faIdBadge,
  faPhone,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

export default function DisplayCV({ formData }) {
  const [general, education, work] = [formData[0][0], formData[1], formData[2]];
  const strDate = (date) => new Date(date).toLocaleDateString();

  return (
    <Container className="py-2 px-4 my-3" id="pdf-content">
      <Row className="genreal-info py-4">
        <h1 className="mb-3">
          {general.firstName} {general.lastName}
        </h1>
        <div className="d-flex justify-content-between align-items-center">
          <h5>
            <FontAwesomeIcon icon={faIdBadge} width={15} /> {general.jobTitle}
          </h5>
          <>
            <span>
              <FontAwesomeIcon icon={faPhone} width={15} /> {general.phoneNumber}
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} width={15} /> {general.email}
            </span>
          </>
        </div>
      </Row>
      <Row className="experience py-4">
        <h4>
          <FontAwesomeIcon icon={faBriefcase} width={20} /> Experience
        </h4>
        <Container>
          {work.map((item) => (
            <Row className="row-item p-2" key={item.id}>
              <Col sm="3" className="fst-light row-date">
                From <strong>{strDate(item.start_date)}</strong> <br />
                To <strong>{strDate(item.end_date)}</strong>
              </Col>
              <Col sm="9">
                <h5 className="mb-0">{item.title}</h5>
                <h6>
                  {item.employment_type} at {item.company_name}
                </h6>
                <p>{item.description}</p>
              </Col>
            </Row>
          ))}
        </Container>
      </Row>
      <Row className="education py-4">
        <h4>
          <FontAwesomeIcon icon={faGraduationCap} width={20} /> Education
        </h4>
        <Container>
          {education.map((item) => (
            <Row className="row-item py-2" key={item.id}>
              <Col sm="3" className="fst-light row-date">
                From <strong>{strDate(item.start_date)}</strong> <br />
                To <strong>{strDate(item.end_date)}</strong>
              </Col>
              <Col sm="9">
                <h5 className="mb-0">{item.degree}</h5>
                <h6>{item.school}</h6>
              </Col>
            </Row>
          ))}
        </Container>
      </Row>
    </Container>
  );
}
