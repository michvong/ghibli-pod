import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import ToDoList from './components/todo/ToDoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="main" element={<Main />}></Route>
        <Route path="to-do" element={<ToDoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
