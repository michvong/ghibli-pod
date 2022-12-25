import React, { useEffect, useState } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

import VideoPlayer from '../components/environment/VideoPlayer';
import EnvironmentList from '../components/environment/EnvironmentList';
import Timer from '../components/timer/Timer';

export default function Main() {
  return (
    <div class="relative h-screen w-screen">
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
