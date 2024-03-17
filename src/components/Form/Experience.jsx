import React, { useState } from "react";
import Input from "./Input";
import { Button, Card, Container, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExperienceItem({
  item,
  handleInputChange,
  handleDeleteExperience,
  handleKeyDown,
  isEditMode,
}) {
  const [editMode, setEditMode] = useState(isEditMode);
  const {
    id,
    title,
    company_name,
    employment_type,
    description,
    start_date,
    end_date,
  } = item;
  const actionButtonTitle = editMode ? "Save" : "Edit";
  const cardTitle = title ? title : `Experience #${id}`;
  const startDate = new Date(start_date).toLocaleDateString();
  const endDate = new Date(end_date).toLocaleDateString();

  return (
    <Card bg="variant.light" className="mb-2">
      <Card.Title className="py-2 px-3 mb-0 d-flex justify-content-between">
        <h5>{cardTitle}</h5>
        <div className="">
          <Button
            variant="link"
            size="sm"
            title={actionButtonTitle}
            className="me-2"
            onClick={() => setEditMode((s) => !s)}
          >
            {actionButtonTitle}
            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
          </Button>
          <Button
            variant="default"
            size="sm"
            title="Delete"
            className="text-danger"
            onClick={(e) => handleDeleteExperience(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </Card.Title>
      <Card.Body className="pt-1">
        {editMode ? (
          <>
            <Input
              label="Title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => handleInputChange(e, id, "title")}
            />
            <InputGroup>
              <Input
                label="Company name"
                placeholder="Enter company name"
                value={company_name}
                onChange={(e) => handleInputChange(e, id, "company_name")}
              />
              <Input
                label="Employment type"
                placeholder="Eg: Full-time"
                value={employment_type}
                onChange={(e) => handleInputChange(e, id, "employment_type")}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <Input
                label="Start date"
                value={start_date}
                onChange={(date) => handleInputChange(date, id, "start_date")}
              />
              <Input
                label="End date"
                value={end_date}
                onChange={(date) => handleInputChange(date, id, "end_date")}
              />
            </InputGroup>
            <Input
              label="Enter description about the job"
              as="textarea"
              value={description}
              onChange={(date) => handleInputChange(date, id, "description")}
              onKeyDown={(e) => handleKeyDown(e, id, "description")}
            />
          </>
        ) : (
          <>
            <Card.Text className="fst-italic">
              {employment_type} at {company_name} <br />
              From {startDate} To {endDate}
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

function Experience({ initialExperienceData, onFormDataChange }) {
  const [workList, setWorkList] = useState(initialExperienceData);

  const handleAddExperience = () => {
    const newWorkList = [
      ...workList,
      {
        id: workList.length + 1,
        title: "",
        company_name: "",
        employment_type: "",
        description: "",
        start_date: new Date(),
        end_date: new Date(),
      },
    ];
    setWorkList(newWorkList);
    onFormDataChange(newWorkList, 2);
  };

  const handleDeleteExperience = (id) => {
    const newWorkList = workList.filter((list) => list.id !== id);
    setWorkList(newWorkList);
    onFormDataChange(newWorkList, 2);
  };

  const handleInputChange = (e, listId, field, checkNewLine) => {
    const checkValue = checkNewLine ? e.target.value + "\n" : e.target.value;
    const newWorkList = workList.map((work) =>
      work.id === listId
        ? {
            ...work,
            [field]: field.includes("date") ? e : checkValue,
          }
        : work
    );
    setWorkList(newWorkList);
    onFormDataChange(newWorkList, 2);
  };

  const handleKeyDown = (e, listId, field) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleInputChange(e, listId, field, true);
    }
  };

  return (
    <Container>
      {workList.map((item, idx) => (
        <ExperienceItem
          key={idx}
          item={item}
          handleInputChange={handleInputChange}
          handleDeleteExperience={handleDeleteExperience}
          handleKeyDown={handleKeyDown}
          isEditMode={!item.title || false}
        />
      ))}
      <Button size="sm" onClick={handleAddExperience}>
        Add Experience
      </Button>
    </Container>
  );
}

export default Experience;
