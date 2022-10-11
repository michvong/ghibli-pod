import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Timer from './components/timer/Timer';
import Environments from './components/environment/Environments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/main"></Route> */}
        <Route path="timer" element={<Timer />}></Route>
        <Route path="environments" element={<Environments />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
