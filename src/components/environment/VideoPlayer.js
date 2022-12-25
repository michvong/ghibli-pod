import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import EnvironmentList from './EnvironmentList';
import Draggable from 'react-draggable';

export default function VideoPlayer() {
  const [currentPlaylistId, setCurrentPlaylistId] = useState();

  const opts = {
    width: window.innerWidth,
    height: window.innerHeight,
    playerVars: {
      autoplay: 1, // video should auto-play when loaded
      // controls: 0, // this doesn't work if autoplay is on
      // disablekb: 1,
      modestbranding: 1,
      list: currentPlaylistId,
      loop: 1,
      start: 1,
    },
  };

  const handlePlaylistSelect = (playlistId) => {
    setCurrentPlaylistId(playlistId);
  };

  return (
    <div>
      <div class="absolute pointer-events-none">
        <YouTube opts={opts} />
      </div>

      <Draggable>
        <div class="box">
          <EnvironmentList class="absolute" handlePlaylistSelect={handlePlaylistSelect} />
        </div>
      </Draggable>
    </div>
  );
}
