import React from "react";
import Form from "react-bootstrap/Form";
const InvoiceId = () => {
  return (
    <div>
      <h5>Invoice ID</h5>
      <Form.Control
        className="search"
        type="text"
        placeholder="Enter Invoice ID"
      />
    </div>
  );
};

export default InvoiceId;
