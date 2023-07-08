import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import './App.css';
function App() {

  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/"  element={<LoginPage/>} />
            <Route path='/tasks' element={<TasksPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;