import React, { useState } from "react";
import useLocalState from "../../util/useLocalStorage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ajax from "../../services/fetchService";
import { Card, Button } from "react-bootstrap";

export default function Dashboard() {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignments, setAssignments] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("api/assignments", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((assignmentDate) => {
        setAssignments(assignmentDate);
      });
  }, []);

  const createAssignment = () => {
    ajax("api/assignments", "POST", jwt).then((assignment) => {
      navigate(`/assignments/${assignment.id}`);
    });
  };

  return (
    <div style={{ margin: "2em" }}>
      <Button className="mb-3" size="lg" onClick={() => createAssignment()}>
        Submit New Assignment
      </Button>
      {assignments ? (
        <div
          className="d-grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, 18rem)" }}
        >
          {assignments.map((assignment) => (
            <Card
              style={{ width: "18rem", height: "18rem" }}
              key={assignment.id}
            >
              <Card.Body className="d-flex flex-column justify-content-around">
                <Card.Title>Assignment #{assignment.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {assignment.status}
                </Card.Subtitle>
                <Card.Text style={{ marginTop: "1em" }}>
                  <p>
                    <b>Github URL</b>: {assignment.githubUrl}
                  </p>
                  <p>
                    <b>Branch</b>: {assignment.branch}
                  </p>
                </Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate(`/assignments/${assignment.id}`);
                  }}
                >
                  Edit
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
