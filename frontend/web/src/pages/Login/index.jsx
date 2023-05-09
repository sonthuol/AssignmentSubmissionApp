import React, { useState } from "react";
import useLocalState from "../../util/useLocalStorage";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setJwt] = useLocalState("", "jwt");

  const sendLoginRequest = () => {
    const body = {
      username: username,
      password: password,
    };

    fetch("api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200)
          return Promise.all([response.json(), response.headers]);
        else return Promise.reject("Invalid login attemp");
      })
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        window.location.href = "dashboard";
      })
      .catch((message) => {
        alert(message);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="8" lg="6">
          <Form.Group className="mb-3" controlId="username">
            <Form.Label htmlFor="username" className="fs-4">
              Username
            </Form.Label>
            <Form.Control
              type="email"
              id="username"
              size="lg"
              placeholder="sonthuol@gmail.com"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8" lg="6">
          <Form.Group className="mb-3" controlId="password">
            <Form.Label htmlFor="password" className="fs-4">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              id="password"
              size="lg"
              placeholder="Type in your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8" lg="6" className="mt-2 d-flex flex-column gap-1">
          <Button
            id="submit"
            size="lg"
            type="button"
            onClick={() => sendLoginRequest()}
          >
            Submit
          </Button>
          <Button variant="secondary" size="lg" type="button">
            Exit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
