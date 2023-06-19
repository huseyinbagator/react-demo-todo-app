
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>To Do List</h1>
        <form className="form">
          {/* Serach Bar Start */}
          <div>
            <input  placeholder="New To-do"></input>
          </div>
          {/* Serach Bar End */}
         
         {/* Buttons Section Start */}
          <div className="buttons">
            <button className="buttonadd" type="submit">Add</button>
            <button className="buttonadelete" type="submit">Delete</button>
          </div>
          {/* Buttons Section End */}
        </form>

          {/* To Do  Section Start */}
        <div className="todolist">
        
        </div>
         {/* To Do  Section End */}

    </div>
  );
}

export default App;
