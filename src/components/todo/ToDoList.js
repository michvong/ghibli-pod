import React, { useEffect, useState } from 'react';

export default function ToDoList({ handleToDoClick }) {
  const onMinimize = () => {
    handleToDoClick();
  };

  return (
    <div class>
      <div class="block relative px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
        <div class="flex justify-between">
          <div class="flex justify-start">
            <h3 class="text-xl text-white">to-do</h3>
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

        <div class="flex flex-col px-1 mb-4 hover:scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-full overflow-y-scroll overflow-hidden">
          <div class="flex space-x-6 mt-4 w-25 pb-3">hello</div>
        </div>
      </div>
    </div>
  );
}
