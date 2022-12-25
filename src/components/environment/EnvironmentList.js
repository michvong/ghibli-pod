import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Environment from './Environment';

import { ENVIRONMENTS } from './environmentConstants';
import Video from '../../assets/icons/video.svg';
import Link from '../../assets/icons/link.svg';

export default function EnvironmentList({
  handlePlaylistSelect,
  currentPlaylistId,
  currentVideoIdx,
}) {
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
      setCurrentChannelIconUrl(response.data.items[0].snippet.thumbnails.medium.url);
    });
  }, [currentPlaylistId, currentChannelId]);

  const onPlaylistSelect = (playlistId) => {
    handlePlaylistSelect(playlistId);
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

        <div class="flex justify-start items-center bg-gray-800 p-2">
          <div class="rounded-full mr-2 bg-white">
            <img src={currentChannelIconUrl} class="o w-12 h-12 rounded-full" />
          </div>

          <div>
            <h3 class="text-sm text-white">{currentVideoChannel}</h3>
            <div class="flex mt-1 justify-start items-center">
              <a href={`https://www.youtube.com/watch?v=${currentVideoId}`}>
                <img src={Video} alt="video" class="mr-1" />
              </a>

              <a href={`https://www.youtube.com/channel/${currentChannelId}`}>
                <img src={Link} alt="channel" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
