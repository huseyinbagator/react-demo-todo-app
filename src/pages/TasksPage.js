import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import TaskList from "../components/TaskList";

function TasksPage() {
  const [currentTask, setCurrentTask] = useState("");
  const [taskLists, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Get the username from localStorage
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const storedData = localStorage.getItem("tasks");
    if (storedData && storedData !== "undefined") {
      setTaskList(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (taskLists.length) {
      localStorage.setItem("tasks", JSON.stringify(taskLists));
    }
  }, [taskLists]);

  const handleChange = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (currentTask) {
      setTaskList([...taskLists, currentTask]);
      setCurrentTask("");
    } else {
      alert("Please enter a To Do...");
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (selectedTask !== null) {
      const updatedTask = [...taskLists];
      updatedTask.splice(selectedTask, 1);
      setTaskList(updatedTask);
      setSelectedTask(null);
      if (taskLists.length === 1) {
        localStorage.setItem("tasks", JSON.stringify(updatedTask));
      }
    }
  };

  const handleSelectTask = (index) => {
    if (selectedTask === index) {
      setSelectedTask(null);
    } else {
      setSelectedTask(index);
    }
  };
  const handleExit = () => {
    localStorage.removeItem("username");
  };
  return (
    <div className="App">
      <Container className="tasks-page d-flex justify-content-center flex-column">
        <Row className="mt-3">
          <Col className="d-flex justify-content-between align-items-center ">
            <h1 className="text-white">To Do List</h1>
            <Link onClick={handleExit} className="btn btn-primary" to="/">
              Exit
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Form className="mt-4">
              <Form.Group className="task-form-control ">
                <Form.Control
                  className="todo-bar rounded-pill text-center mt-5"
                  value={currentTask}
                  onChange={handleChange}
                  placeholder="New To-do"
                />
              </Form.Group>
              <div className="d-flex justify-content-center align-items-center ">
                <Button
                  type="submit"
                  className=" btn btn-primary"
                  onClick={handleAdd}
                >
                  Add
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDelete}
                >
                  Delete Selected Task
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <TaskList
            taskLists={taskLists}
            selectedTask={selectedTask}
            handleSelectTask={handleSelectTask}
          />
        </Row>
      </Container>
    </div>
  );
}

export default TasksPage;
