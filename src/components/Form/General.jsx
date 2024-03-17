import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Input from "./Input";

function General({ initialGeneralData, onFormDataChange }) {
  const [personalInfo, setPersonalInfo] = useState(initialGeneralData);

  const handleInputChange = (e, field) => {
    const newPersonalInfo = [{ ...personalInfo[0], [field]: e.target.value }];
    setPersonalInfo(newPersonalInfo);
    onFormDataChange(newPersonalInfo, 0);
  };

  return personalInfo.map((info, idx) => (
    <div key={idx}>
      <InputGroup>
        <Input
          label="Firstname"
          placeholder="Firstname"
          value={info.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <Input
          label="Lastname"
          placeholder="Lastname"
          value={info.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
      </InputGroup>
      <InputGroup>
        <Input
          label="Email"
          type="email"
          placeholder="Email address"
          value={info.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <Input
          label="Phone number"
          placeholder="Phone number"
          value={info.phoneNumber}
          onChange={(e) => handleInputChange(e, "phonenumber")}
        />
      </InputGroup>
      <Input
        label="Job Title"
        placeholder="Job Title"
        value={info.jobTitle}
        onChange={(e) => handleInputChange(e, "jobTitle")}
      />
    </div>
  ));
}

export default General;
