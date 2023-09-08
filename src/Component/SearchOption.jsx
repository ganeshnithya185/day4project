import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchOption = () => {
  return (
    <div style={{ width: "500px" }}>
      <Form inline>
        <Row>
          <Col>
            <Form.Control
              className="search-option"
              type="text"
              placeholder="Search"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchOption;
