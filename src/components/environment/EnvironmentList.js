import React, { useEffect, useState } from 'react';
import Environment from './Environment';
import { ENVIRONMENTS } from './environmentConstants';

export default function EnvironmentList({ handlePlaylistSelect }) {
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

        <div class="flex flex-col px-1 hover:scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-full overflow-x-scroll overflow-hidden">
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
      </div>
    </div>
  );
}
