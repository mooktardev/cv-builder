import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Input({ label, as, type = "text", placeholder, value, onChange, onKeyDown }) {
  const id = label.replace(/\s+/g, "");
  return (
    <FloatingLabel label={label} className={label.includes("date") && "form-floating-date"} >
      {label.includes("date") ? (
        <div>
          <DatePicker selected={value} onChange={onChange}></DatePicker>
        </div>
      ) : (
        <Form.Control
          type={type}
          as={as}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          style={as && { height: '100px' }}
        ></Form.Control>
      )}
    </FloatingLabel>
  );
}

export default Input;
