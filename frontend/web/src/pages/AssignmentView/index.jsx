import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalState from "../../util/useLocalStorage";

export default function AssignmentView() {
  const params = useParams();
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignment, setAssignment] = useState(null);
  const assignmentId = params.id;

  useEffect(() => {
    fetch(`/api/assignments/${assignmentId}`, {
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
        setAssignment(assignmentDate);
      });
  }, []);

  return (
    <div>
      <h1>Assignment Id: {assignmentId}</h1>
      {assignment ? (
        <div>
          <h2>Status: {assignment.status}</h2>
          <h3>
            GitHub URL: <input type="url" id="gitHubUrl" />
          </h3>
          <h3>
            Brach: <input type="text" id="brach" />
          </h3>
          <button>Submit Assignment</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
