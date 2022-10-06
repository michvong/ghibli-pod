import React from 'react';
import { useState } from 'react';

export default function Timer() {
    const DEFAULT_MINUTES = "25";
    const SECONDS_RESET = 60;
    const DISPLAY_SECONDS_RESET = 59;
    let currentSeconds = 0;
    let isRunning = false;

    let [minutes, setMinutes] = useState(25);
    let [seconds, setSeconds] = useState(60);
    let [displaySeconds, setDisplaySeconds] = useState(0);
    let [displayMinutes, setDisplayMinutes] = useState(25);

    function pad(num) {
        return (num < 10) ? ("0" + num) : num;
    }

    const handleMinutesChange = (minutes) => {
        if (parseInt(minutes) > 999 || parseInt(minutes) < 1) {
            console.log("Minutes cannot be " + minutes + ". It must be between 1 and 999.");
            setMinutes(DEFAULT_MINUTES);
            setDisplayMinutes(DEFAULT_MINUTES);
            console.log("Minutes is now " + DEFAULT_MINUTES);
        
        } else {
            console.log("Minutes is now " + minutes);
            setMinutes(minutes);
            setDisplayMinutes(minutes);
        }
    }

    const handleShortMinsChange = () => {

    }

    const handleLongMinsChange = () => {
        
    }
    
    const onSettingsClick = () => {

    }

    /* idea:
    - when user clicks restart, timer should go back to initial value
    - this button will ONLY work if timer is 0 and NOT currently running (use boolean?)
    */
    const onRestartClick = () => {
        if (isRunning !== true) {
            setDisplayMinutes(minutes);
        } 
    }

    const onTimerClick = () => {
        isRunning = true;
        let minToSec = minutes * 60;
        onTimerStop(minToSec);
    }
    
    const onTimerStop = (maxSeconds) => {
        if (seconds === 0) {
            displaySeconds = 59;
            seconds = 60;
        }

        if (seconds === 60) {
            displaySeconds = 59;
            displayMinutes--;
            setDisplayMinutes(displayMinutes);
        }
        
        if (seconds !== 60) {
            displaySeconds--;
        }
        
        currentSeconds++;
        seconds--;
        setDisplaySeconds(displaySeconds);
         
        if (currentSeconds === maxSeconds) {
            console.log("Timer done!");
            return;
        }
        
        setTimeout(onTimerStop, 1000, maxSeconds);
    }
    
    /* idea: after work timer completes, transition to break
    - if less than 3 sessions, short break
    - if more than 4 sessions, long break
    1. let user input number of minutes for timer (default 25)
    2. when user starts timer, start counting down seconds and minutes
    3. once timer is done, play a sound and add to # of sessions completed 
    */

    return (
        <div class="block px-8 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-lg max-w-sm">
            <h3 class="text-xl text-white">Timer</h3>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> */}

            <div class="flex justify-between text-white">
                <h3 class="mt-3 text-5xl font-bold text-white">{displayMinutes}:{pad(displaySeconds)}</h3>
                <div class="flex space-x-1">
                    <button onClick={onTimerClick} type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

                    <button onClick={onRestartClick} type="button" class="mt-4">
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

            <div class="flex justify-between">
                <p class="mt-4 text-sm text-gray-300">
                    You've completed _ sessions to this date!
                </p>

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
                        <circle cx="12" cy="12" r="3"></circle>
                        <path 
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                        >
                        </path>
                    </svg>
                        <span class="sr-only">restart</span>
                    </button>
            </div>
            
            <div class="flex justify-between mt-4">
                <input
                    name="minutes"
                    type="number"
                    value={minutes}
                    min={0}
                    max={999}
                    onChange={(e) => handleMinutesChange(e.target.value)}
                />

                <input
                    name="short-break"
                    type="number"
                    value={minutes}
                    min={0}
                    max={999}
                    onChange={(e) => handleMinutesChange(e.target.value)}
                />

                <input
                    name="long-break"
                    type="number"
                    value={minutes}
                    min={0}
                    max={999}
                    onChange={(e) => handleMinutesChange(e.target.value)}
                />
            </div>
        </div>
    )
}