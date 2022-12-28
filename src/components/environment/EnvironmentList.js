import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Environment from './Environment';
import { ENVIRONMENTS } from './environmentConstants';

import Video from '../../assets/icons/video.svg';
import Youtube from '../../assets/icons/youtube.svg';
import Next from '../../assets/icons/skip-forward.svg';
import Previous from '../../assets/icons/skip-back.svg';
import Volume from '../../assets/icons/volume-1.svg';
import VolumeX from '../../assets/icons/volume-x.svg';

export default function EnvironmentList({
  handlePlaylistSelect,
  handleNextSelect,
  handlePrevSelect,
  handleVolumeMute,
  handleVolumeUnmute,
  handleEnvironmentsClick,
  currentVideoChannel,
  currentVideoId,
  currentChannelId,
  currentChannelIconUrl,
}) {
  const [isMuted, setIsMuted] = useState(false);

  const onPlaylistSelect = (playlistId) => {
    handlePlaylistSelect(playlistId);
  };

  const onNextSelect = () => {
    handleNextSelect();
  };

  const onPrevSelect = () => {
    handlePrevSelect();
  };

  const onVolumeToggle = () => {
    if (!isMuted) {
      setIsMuted(true);
      handleVolumeMute();
    } else {
      setIsMuted(false);
      handleVolumeUnmute();
    }
  };

  const onMinimize = () => {
    handleEnvironmentsClick();
  };

  return (
    <div class>
      <div class="block relative px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
        <div class="flex justify-between">
          <div class="flex justify-start">
            <h3 class="text-xl text-white">environments</h3>
          </div>

          <button onClick={onMinimize}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hover:stroke-gray-400 active:stroke-gray-700"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>

        <div class="flex flex-col px-1 mb-4 hover:scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-full overflow-x-scroll overflow-hidden">
          <div class="flex space-x-6 mt-4 w-25 pb-3">
            {ENVIRONMENTS.map((env) => (
              <Environment
                tooltipContent={env.tooltipContent}
                image={env.image}
                alt={env.altText}
                handleClick={() => onPlaylistSelect(env.playlistId)}
              />
            ))}
          </div>
        </div>

        <div class="flex justify-between items-center bg-gray-800 p-2">
          <div class="flex justify-start">
            <div class="rounded-full mr-2 max-w-12 max-h-12 bg-white">
              <img src={currentChannelIconUrl} class="max-w-12 max-h-12 rounded-full" />
            </div>

            <div>
              <h3 class="text-sm text-white">{currentVideoChannel}</h3>

              <div class="flex mt-1 justify-start items-center">
                <a href={`https://www.youtube.com/watch?v=${currentVideoId}`} target="_blank">
                  <img src={Video} alt="video" class="mr-2" />
                </a>

                <a href={`https://www.youtube.com/channel/${currentChannelId}`} target="_blank">
                  <img src={Youtube} alt="channel" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div class="flex justify-between block relative px-2 py-2 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
              <button class="mr-6" onClick={onVolumeToggle} type="button">
                {isMuted ? (
                  <img src={VolumeX} alt="volume muted" />
                ) : (
                  <img src={Volume} alt="volume unmuted" />
                )}
              </button>

              <button>
                <img src={Previous} alt="previous" class="mr-2" onClick={onPrevSelect} />
              </button>

              <button>
                <img src={Next} alt="next" onClick={onNextSelect} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
