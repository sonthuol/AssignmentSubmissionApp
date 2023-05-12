import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Badge,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import useLocalState from "../../util/useLocalStorage";
import ajax from "../../services/fetchService";

export default function AssignmentView() {
  const params = useParams();
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignment, setAssignment] = useState({
    githubUrl: "",
    branch: "",
  });
  const assignmentId = params.id;

  const updateAssignment = (prop, value) => {
    const newAssignment = { ...assignment };
    newAssignment[prop] = value;
    setAssignment(newAssignment);
  };

  const save = () => {
    ajax(`/api/assignments/${assignmentId}`, "PUT", jwt, assignment).then(
      (assignmentData) => {
        console.log(assignmentData);
        setAssignment(assignmentData);
      }
    );
  };

  useEffect(() => {
    ajax(`/api/assignments/${assignmentId}`, "GET", jwt).then(
      (assignmentData) => {
        setAssignment(assignmentData);
      }
    );
  }, []);

  return (
    <Container className="mt-5">
      <Row className="d-flex align-items-center">
        <Col>
          <h1>Assignment {assignmentId} </h1>
        </Col>
        <Col>
          <Badge pill bg="info" style={{ fontSize: "1rem" }}>
            {assignment.status}
          </Badge>
        </Col>
      </Row>

      {assignment ? (
        <div>
          <Form.Group as={Row} className="my-4">
            <Form.Label column sm="3" md="2">
              Assignment Number:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <DropdownButton
                as={ButtonGroup}
                id="assignmentName"
                variant="info"
                title="Assignment 1"
              >
                {["1", "2", "3", "4", "5"].map((assignmentNumber) => (
                  <Dropdown.Item
                    eventKey={assignmentNumber}
                    key={assignmentNumber}
                  >
                    Assignment {assignmentNumber}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-4">
            <Form.Label column sm="3" md="2">
              Github URL:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <Form.Control
                id="githubUrl"
                type="url"
                onChange={(e) => updateAssignment("githubUrl", e.target.value)}
                value={assignment.githubUrl || ""}
                placeholder="https://github.com/sonthuol/AssignmentSubmissionApp"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3" md="2">
              Branch:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <Form.Control
                type="text"
                id="branch"
                onChange={(e) => updateAssignment("branch", e.target.value)}
                value={assignment.branch || ""}
                placeholder="main"
              />
            </Col>
          </Form.Group>
          <Button onClick={() => save()}>Submit Assignment</Button>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}
