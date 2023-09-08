import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CustomerName = () => {
  return (
    <div>
      <h5>Customer</h5>
      <Form.Control
        className="search"
        type="text"
        placeholder="Enter Customer Name"
      />
    </div>
  );
};

export default CustomerName;
