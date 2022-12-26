import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import EnvironmentList from './EnvironmentList';
import Draggable from 'react-draggable';

export default function VideoPlayer({ isEnvironmentsVisible }) {
  const [currentPlaylistId, setCurrentPlaylistId] = useState();
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [player, setPlayer] = useState();

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

  const handleVideoEnd = () => {
    // setCurrentVideoIdx(currentVideoIdx + 1);
  };

  const handlePlaylistSelect = (playlistId) => {
    setCurrentPlaylistId(playlistId);
  };

  const handleNextSelect = () => {
    player.nextVideo();
  };

  const handlePrevSelect = () => {
    player.previousVideo();
  };

  const handleVolumeMute = () => {
    player.mute();
  };

  const handleVolumeUnmute = () => {
    player.unMute();
  };

  return (
    <div>
      <div class="absolute pointer-events-none">
        <YouTube opts={opts} onEnd={handleVideoEnd} onReady={(event) => setPlayer(event.target)} />
      </div>

      <Draggable>
        <div class={isEnvironmentsVisible ? 'visible' : 'hidden'}>
          <EnvironmentList
            class="absolute"
            handlePlaylistSelect={handlePlaylistSelect}
            currentPlaylistId={currentPlaylistId}
            currentVideoIdx={currentVideoIdx}
            handleNextSelect={handleNextSelect}
            handlePrevSelect={handlePrevSelect}
            handleVolumeMute={handleVolumeMute}
            handleVolumeUnmute={handleVolumeUnmute}
          />
        </div>
      </Draggable>
    </div>
  );
}
