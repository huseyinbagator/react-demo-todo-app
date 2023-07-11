import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function TasksPage() {
    const [value, setValue] = useState("");
    const [savedValue, setSavedValue] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
      };
      
      const handleAdd = (event) => {
        event.preventDefault();
        setSavedValue([...savedValue, value]);
        setValue("");
      
      };
      
      const handleDelete = (event) => {
        event.preventDefault();
        if (selectedTodo !== null) {
          const updatedTodos = [...savedValue];
          updatedTodos.splice(selectedTodo, 1);
          setSavedValue(updatedTodos);
          setSelectedTodo(null);
        }
      };
    
      const handleSelectTodo = (index) => {
        setSelectedTodo(index);
      };
  return (
    <div className="App">
      <div className='nav-top'>
         <h1>To Do List</h1>
         <Link className='exit' to="/">Exit</Link>
      </div>
       
        <form className="form">
          <div>
            <input
              value={value} onChange={handleChange}   placeholder="New To-do"
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
            {savedValue.map((value, index) => (
              <li
               key={index}
                onClick={() => handleSelectTodo(index)}
              > <span  className={`round ${selectedTodo === index ? 'green' : ''}`}></span>
                {value}
               
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default TasksPage