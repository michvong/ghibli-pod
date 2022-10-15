import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Timer from './components/timer/Timer';
import EnvironmentList from './components/environment/EnvironmentList';
import VideoPlayer from './components/environment/VideoPlayer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/main"></Route> */}
        <Route path="timer" element={<Timer />}></Route>
        <Route path="environments" element={<EnvironmentList />}></Route>
        <Route path="video-player" element={<VideoPlayer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
