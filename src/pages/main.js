import React, { useState } from 'react';
import Draggable from 'react-draggable';

import VideoPlayer from '../components/environment/VideoPlayer';
import Timer from '../components/timer/Timer';
import Sidebar from '../components/sidebar/Sidebar';

export default function Main() {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [isEnvironmentsVisible, setIsEnvironmentsVisible] = useState(false);

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

  return (
    <div class="h-screen w-screen">
      <Sidebar
        handleTimerClick={handleTimerClick}
        handleEnvironmentsClick={handleEnvironmentsClick}
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
    </div>
  );
}
