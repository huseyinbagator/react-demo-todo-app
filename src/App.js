
import './App.css';
import {useState} from 'react';

function App() {
  const [value, setvalue] = useState(" ");
  const [savedValue, setsavedValue] = useState([]);
  const handleChange = (e) => {
  setvalue(e.target.value)
  console.log(e.target.value)
  }
  const handleadd = (event) =>{
    setsavedValue([...savedValue,value]);
    setvalue('');
    event.preventDefault();
  }
  return (
   <>
      <div className="App">
         <h1>To Do List</h1>
          <form className="form" >
           {/* Serach Bar Start */}
            <div>
                <input value={value}  onChange={handleChange} placeholder="New To-do">
                </input>
            </div>
           {/* Serach Bar End */}
            
          {/* Buttons Section Start */}
            <div className="buttons">
              <button className="buttonadd" onClick={handleadd} type="submit">Add</button>
               <button className="buttonadelete" type="submit">Delete</button>
            </div>
          {/* Buttons Section End */}
          </form>

          {/* To Do  Section Start */}
            <div className="todolist">
                <ul>
                  {savedValue.map((value,index) =>(
                      <li key={index}>{value}</li>
                  ))}
                  
                </ul>
            </div>
          {/* To Do  Section End */}

       </div>
    </>
  );
}

export default App;
