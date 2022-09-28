import React from 'react';

export default function Timer() {
    return (
        <div class="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-lg max-w-sm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
            </svg>
            <div class="flex justify-between text-white">
                <h3 class="mt-3 text-3xl font-bold text-white">00:00</h3>
                <button class="text-2xl">X</button>
            </div>


            <p class="mt-4 text-sm text-gray-300">
                Information about Pomodoro.
            </p>
        </div>
    )
}