import React, { useEffect, useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

import VideoPlayer from '../components/environment/VideoPlayer';
import Timer from '../components/timer/Timer';
import Sidebar from '../components/sidebar/Sidebar';

export default function Main() {
  return (
    <div class="h-screen w-screen">
      <Sidebar />

      <div class="absolute">
        <VideoPlayer />
      </div>

      <Draggable>
        <div class="box">
          <Timer />
        </div>
      </Draggable>
    </div>
  );
}
