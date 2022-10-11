import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Timer from './components/timer/Timer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/main"></Route> */}
        <Route path="timer" element={<Timer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
