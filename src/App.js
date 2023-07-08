import React from 'react';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
function App() {

  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path="/"  element={<LoginPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;