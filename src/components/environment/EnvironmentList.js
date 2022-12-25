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
  currentPlaylistId,
  currentVideoIdx,
  handleNextSelect,
  handleVolumeMute,
  handleVolumeUnmute,
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [currentVideoTitle, setCurrentVideoTitle] = useState();
  const [currentVideoChannel, setCurrentVideoChannel] = useState('n/a');
  const [currentVideoId, setCurrentVideoId] = useState();
  const [currentChannelId, setCurrentChannelId] = useState();
  const [currentChannelIconUrl, setCurrentChannelIconUrl] = useState();

  useEffect(() => {
    api.getPlaylistItemInfo(currentPlaylistId).then((response) => {
      setCurrentVideoTitle(response.data.items[currentVideoIdx].snippet.title);
      setCurrentVideoChannel(response.data.items[currentVideoIdx].snippet.videoOwnerChannelTitle);
      setCurrentVideoId(response.data.items[currentVideoIdx].snippet.resourceId.videoId);
      setCurrentChannelId(response.data.items[currentVideoIdx].snippet.videoOwnerChannelId);
    });

    api.getChannelInfo(currentChannelId).then((response) => {
      setCurrentChannelIconUrl(response.data.items[0].snippet.thumbnails.default.url);
    });
  }, [currentPlaylistId, currentChannelId]);

  const onPlaylistSelect = (playlistId) => {
    handlePlaylistSelect(playlistId);
  };

  const onNextSelect = () => {
    handleNextSelect();
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

  return (
    <div class>
      <div class="block relative px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
        <div class="flex justify-between">
          <div class="flex justify-start">
            <h3 class="text-xl text-white">environments</h3>
          </div>
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
            <div class="rounded-full mr-2 bg-white">
              <img src={currentChannelIconUrl} class="w-12 h-12 rounded-full" />
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
                <img src={Previous} alt="previous" class="mr-1" onClick={onNextSelect} />
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
