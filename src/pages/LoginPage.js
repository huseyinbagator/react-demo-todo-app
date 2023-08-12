import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import image from "../images/image-1.png";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    if (Username === "admin" && Password === "admin") {
      localStorage.setItem("username", "admin");
      navigate("/tasks");
    } else {
      alert("Username or password is wrong");
    }
    event.preventDefault();
  };

  useEffect(() => {
    const loginValidation = localStorage.getItem("username");
    if (loginValidation) {
      navigate("/tasks");
    }
  }, [navigate]);

  return (
    <div className="login-page-main d-flex  justify-content-center align-items-center">
      <Container className=" d-flex justify-content-between bg-white rounded-4">
        <main className="login-form-section">
          <section>
            <h2 className="h2title mt-4">Welcome to To Do!</h2>
            <p className="mt-3">
              "Manage your time, organize your tasks with To Do!"
            </p>
            <h1 className="mt-3 text-dark">Log In</h1>
          </section>
          <Form className="d-flex flex-column" onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                className=" mt-1 mb-1"
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className=" mt-1"
                type="password"
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <div className="d-flex flex-column mt-4 ">
              <Button className="btn log mb-4" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </main>
        <aside className="login-form-aside rounded-4 d-none d-lg-block">
          <img className="login-girl-image" alt="Girl-vector" src={image} />
        </aside>
      </Container>
    </div>
  );
}

export default Login;
