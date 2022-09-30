import React from 'react';
import { useState } from 'react';

export default function Timer() {
    const [minutes, setMinutes] = useState("25");
    const [seconds, setSeconds] = useState("00");

    const handleMinutesChange = (minutes) => {
        console.log("The minutes were changed to " + minutes);
        setMinutes(minutes);
    }

    // const Timer = () => {
    // }

    /* idea:
    1. let user input number of minutes for timer (default 25)
    2. when user starts timer, start counting down seconds and minutes
    3. once timer is done, play a sound and add to # of sessions completed 
    
    1. click on header
    2. indicator for user to type (input)
    3.
    */

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
                <h3 class="mt-3 text-4xl font-bold text-white">{minutes}:{seconds}</h3>
                <div class="flex space-x-1">
                    <button type="button" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" stroke="#ffffff" 
                            stroke-width="2" stroke-linecap="round" 
                            stroke-linejoin="round"
                        >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        <span class="sr-only">play</span>
                    </button>

                    <button type="button" class="mt-4">
                        <svg 
                            class="hover:stroke-blue-500 active:stroke-blue-800" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="15" height="15" 
                            viewBox="0 0 24 24" 
                            fill="none" stroke="#ffffff" 
                            stroke-width="2" stroke-linecap="round" 
                            stroke-linejoin="round"
                        >
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
                        </svg>
                        <span class="sr-only">restart</span>
                    </button>
                </div>
            </div>

            <p class="mt-4 text-sm text-gray-300">
                You've completed _ sessions to this date!
            </p>
        </div>
    )
}