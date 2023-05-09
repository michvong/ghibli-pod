import React, { useState } from 'react';
import Draggable from 'react-draggable';

import VideoPlayer from '../components/environment/VideoPlayer';
import Timer from '../components/timer/Timer';
import Sidebar from '../components/sidebar/Sidebar';
import ToDoList from '../components/todo/ToDoList';

export default function Main() {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [isEnvironmentsVisible, setIsEnvironmentsVisible] = useState(false);
  const [isToDoVisible, setIsToDoVisible] = useState(false);

  const handleTimerClick = () => {
    if (isTimerVisible) {
      setIsTimerVisible(false);
    } else {
      setIsTimerVisible(true);
    }
  };

  const handleEnvironmentsClick = () => {
    if (isEnvironmentsVisible) {
      setIsEnvironmentsVisible(false);
    } else {
      setIsEnvironmentsVisible(true);
    }
  };

  const handleToDoClick = () => {
    if (isToDoVisible) {
      setIsToDoVisible(false);
    } else {
      setIsToDoVisible(true);
    }
  };

  return (
    <div class="max-h-screen max-w-screen overscroll-none">
      <Sidebar
        handleTimerClick={handleTimerClick}
        handleEnvironmentsClick={handleEnvironmentsClick}
        handleToDoClick={handleToDoClick}
      />

      <div class="absolute">
        <VideoPlayer
          isEnvironmentsVisible={isEnvironmentsVisible}
          handleEnvironmentsClick={handleEnvironmentsClick}
        />
      </div>

      <Draggable>
        <div class={isTimerVisible ? 'visible' : 'hidden'}>
          <Timer handleTimerClick={handleTimerClick} />
        </div>
      </Draggable>

      <Draggable>
        <div class={isToDoVisible ? 'visible' : 'hidden'}>
          <ToDoList handleToDoClick={handleToDoClick} />
        </div>
      </Draggable>
    </div>
  );
}
