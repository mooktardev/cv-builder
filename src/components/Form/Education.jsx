import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  InputGroup,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Input from "./Input";

function EducationItem({
  item,
  handleInputChange,
  handleDeleteEducation,
  isEditMode,
}) {
  const { id, school, degree, start_date, end_date } = item
  const [editMode, setEditMode] = useState(isEditMode);
  const title = degree ? degree : `Education #${id}`;
  const startDate = new Date(start_date).toLocaleDateString()
  const endDate = new Date(end_date).toLocaleDateString()
  const actionTitle = editMode ? "Save" : "Edit"

  return (
    <Card bg="variant.light" className="mb-2">
      <Card.Title className="py-2 px-3 mb-0 d-flex justify-content-between">
        <h5>{title}</h5>
        <div className="">
          <Button
              variant="link"
              size="sm"
              title={actionTitle}
              className="me-2"
              onClick={() => setEditMode(s => !s)}
            >
              {actionTitle}
              {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
          </Button>
          <Button
            variant="default"
            size="sm"
            title="Delete"
            className="text-danger"
            onClick={(e) => handleDeleteEducation(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </Card.Title>
      <Card.Body className="pt-1">
        {editMode ? (
          <>
            <InputGroup>
              <Input
                label="Degree"
                placeholder="Enter Degree"
                value={degree}
                onChange={(e) => handleInputChange(e, id, "degree")}
              />
              <Input
                label="School"
                placeholder="Enter School"
                value={school}
                onChange={(e) => handleInputChange(e, id, "school")}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <Input
                label="Start date"
                value={start_date}
                onChange={(date) =>
                  handleInputChange(date, id, "start_date")
                }
              />
              <Input
                label="End date"
                value={end_date}
                onChange={(date) =>
                  handleInputChange(date, id, "end_date")
                }
              />
            </InputGroup>
          </>
        ) : (
          <>
            <Card.Text className="fst-italic">
              {school} - from {startDate} to {endDate}
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

function Education({ initialEducationData, onFormDataChange }) {
  const [educationList, setEducationList] = useState(initialEducationData);

  const handleAddEducation = (newItem) => {
    const newEducationList = [
      ...educationList,
      {
        id: educationList.length + 1,
        degree: "",
        school: "",
        start_date: new Date(),
        end_date: new Date(),
      },
    ];

    setEducationList(newEducationList);
    onFormDataChange(newEducationList, 1);
  };

  const handleDeleteEducation = (id) => {
    const newEducationList = educationList.filter((list) => list.id !== id);
    setEducationList(newEducationList);
    onFormDataChange(newEducationList, 1);
  };

  const handleInputChange = (e, listId, field) => {
    const newEducationList = educationList.map((edu) =>
      edu.id === listId
        ? { ...edu, [field]: field.includes("date") ? e : e.target.value }
        : edu
    );
    setEducationList(newEducationList);
    onFormDataChange(newEducationList, 1);
  };

  return (
    <Container>
      {educationList.map((item, idx) => (
        <EducationItem
          key={idx}
          item={item}
          handleInputChange={handleInputChange}
          handleDeleteEducation={handleDeleteEducation}
          isEditMode={!item.degree || false}
        />
      ))}
      <Button size="sm" onClick={handleAddEducation}>
        Add Education
      </Button>
    </Container>
  );
}

export default Education;
