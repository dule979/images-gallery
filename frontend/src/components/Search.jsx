import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ input, onInput, onHandleInput }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={onHandleInput}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  placeholder="Search for new images..."
                  type="text"
                  value={input}
                  onChange={(e) => onInput(e.target.value)}
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
