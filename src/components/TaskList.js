import React from "react";

import Col from "react-bootstrap/Col";

function TaskList({ taskLists, selectedTask,handleSelectTask }) {
  return (
    <Col className="d-flex justify-content-center align-items-center ">
    
      <ul className="tasklist text-white mt-2 ms-4  ">
        {taskLists.map((currentTask, index) => (
          <li
            className="mt-1 d-flex "
            key={index}
            onClick={() => handleSelectTask(index)}
          >
            {" "}
            <span
              className={`round rounded-circle me-3 bg-secondary ${
                selectedTask === index ? "bg-success" : ""
              }`}
            ></span>
            {currentTask}
          </li>
        ))}
      </ul>
    </Col>
  );
}

export default TaskList;
