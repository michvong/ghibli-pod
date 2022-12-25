import React, { useEffect, useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

import VideoPlayer from '../components/environment/VideoPlayer';
import Timer from '../components/timer/Timer';
import Sidebar from '../components/sidebar/Sidebar';

export default function Main() {
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const handleTimerClick = () => {
    if (isTimerVisible) {
      setIsTimerVisible(false);
    } else {
      setIsTimerVisible(true);
    }
  };

  return (
    <div class="h-screen w-screen">
      <Sidebar handleTimerClick={handleTimerClick} />

      <div class="absolute">
        <VideoPlayer />
      </div>

      <Draggable>
        <div class={isTimerVisible ? 'visible' : 'hidden'}>
          <Timer />
        </div>
      </Draggable>
    </div>
  );
}
