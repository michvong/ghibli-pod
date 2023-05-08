import React from 'react';
import { Tooltip } from '@material-tailwind/react';

export default function Environment({ tooltipContent, image, alt, handleClick }) {
  return (
    <Tooltip content={tooltipContent} placement="bottom">
      <button
        onClick={handleClick}
        class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white active:ring-4 active:outline-none active:ring-green-200 dark:active:ring-green-800"
      >
        <span class="relative p-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
          <img src={image} alt={alt} class="w-8" />
        </span>
      </button>
    </Tooltip>
  );
}
