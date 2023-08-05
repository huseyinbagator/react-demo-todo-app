import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const handleExit= () =>{
    localStorage.removeItem("username");
  }
  return (
    <div className="App">
      <div className="nav-top">
        <h1>To Do List</h1>
        <Link onClick={handleExit} className="exit" to="/">
          Exit
        </Link>
      </div>

      <form className="form">
        <div>
          <input
            value={currentTask}
            onChange={handleChange}
            placeholder="New To-do"
          />
        </div>
        <div className="buttons">
          <button className="buttonadd" onClick={handleAdd} type="submit">
            Add
          </button>
          <button
            type="submit"
            onClick={handleDelete}
            className="buttonadelete"
            disabled={selectedTask === null}
          >
            Seçili Görevi Sil
          </button>
        </div>
      </form>

      <div className="tasklist">
        <ul>
          {taskLists.map((currentTask, index) => (
            <li key={index} onClick={() => handleSelectTask(index)}>
              {" "}
              <span
                className={`round ${selectedTask === index ? "green" : ""}`}
              ></span>
              {currentTask}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TasksPage;
