import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TasksPage() {
  const [currentTask, setCurrentTask] = useState("");
  const [taskLists, setTaskList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

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
    if (selectedTodo !== null) {
      const updatedTodos = [...taskLists];
      updatedTodos.splice(selectedTodo, 1);
      setTaskList(updatedTodos);
      setSelectedTodo(null);
      if (taskLists.length === 1) {
        localStorage.setItem("tasks", JSON.stringify(updatedTodos));
      }
    }
  };

  const handleSelectTodo = (index) => {
    if (selectedTodo === index) {
      setSelectedTodo(null);
    } else {
      setSelectedTodo(index);
    }
  };

  return (
    <div className="App">
      <div className="nav-top">
        <h1>To Do List</h1>
        <Link className="exit" to="/">
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
            disabled={selectedTodo === null}
          >
            Seçili Görevi Sil
          </button>
        </div>
      </form>

      <div className="todolist">
        <ul>
          {taskLists.map((currentTask, index) => (
            <li key={index} onClick={() => handleSelectTodo(index)}>
              {" "}
              <span
                className={`round ${selectedTodo === index ? "green" : ""}`}
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
