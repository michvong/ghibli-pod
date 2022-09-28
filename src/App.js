import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Timer from './components/tools/Timer';

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
