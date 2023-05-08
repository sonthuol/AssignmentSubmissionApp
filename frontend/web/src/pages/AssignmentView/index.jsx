import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <h1>Assignment Id: {assignmentId}</h1>
      {assignment ? (
        <div>
          <h2>Status: {assignment.status}</h2>
          <h3>
            Github URL:{" "}
            <input
              type="url"
              id="githubUrl"
              onChange={(e) => updateAssignment("githubUrl", e.target.value)}
              value={assignment.githubUrl || ""}
            />
          </h3>
          <h3>
            Brach:{" "}
            <input
              type="text"
              id="branch"
              onChange={(e) => updateAssignment("branch", e.target.value)}
              value={assignment.branch || ""}
            />
          </h3>
          <button onClick={() => save()}>Submit Assignment</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
