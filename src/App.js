import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Timer from './components/timer/Timer';
import EnvironmentList from './components/environment/EnvironmentList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/main"></Route> */}
        <Route path="timer" element={<Timer />}></Route>
        <Route path="environments" element={<EnvironmentList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
