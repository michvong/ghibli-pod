import React from 'react';
import { useState } from 'react';

import Play from '../../icons/Play';
import Pause from '../../icons/Pause';
import Restart from '../../icons/Restart';
import Settings from '../../icons/Settings';

export default function Timer() {
    const DEFAULT_MINUTES = "25";
    const SECONDS_RESET = 60;
    const DISPLAY_SECONDS_RESET = 59;

    let currentSeconds = 0;
    
    let [minutes, setMinutes] = useState(25);
    let [seconds, setSeconds] = useState(60);
    let [displaySeconds, setDisplaySeconds] = useState(0);
    let [displayMinutes, setDisplayMinutes] = useState(25);
    let [isPlaying, setIsPlaying] = useState(false);

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
        if (isPlaying !== true) {
            setDisplayMinutes(minutes);
            setDisplaySeconds(0);
        } 
    }

    const onTimerToggle = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            onPlayHandler();
        } else {
            setIsPlaying(false);
            onPauseHandler();
        }
    }

    const onPlayHandler = () => {
        let minToSec = minutes * 60;
        timerHandler(minToSec);
    }

    const onPauseHandler = () => {
        console.log("Timer was paused.");
    }
    
    const timerHandler = (maxSeconds) => {
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
        
        setTimeout(timerHandler, 1000, maxSeconds);
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
                    <button onClick={onTimerToggle} type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {isPlaying? <Pause /> : <Play />}
                    </button>

                    <button onClick={onRestartClick} type="button" class="mt-4">
                        <Restart />
                    </button>
                </div>
            </div>

            <div class="flex justify-between">
                <p class="mt-4 text-sm text-gray-300">
                    You've completed _ sessions to this date!
                </p>

                <button type="button" class="mt-4">
                    <Settings />
                </button>
            </div>
            
            <div class="flex justify-between mt-4">
                <input
                    class="pl-1"
                    name="minutes"
                    type="number"
                    value={minutes}
                    min={0}
                    max={999999}
                    onChange={(e) => handleMinutesChange(e.target.value)}
                />

                <input
                    class="pl-1"
                    name="short-break"
                    type="number"
                    value={minutes}
                    min={0}
                    max={999999}
                    onChange={(e) => handleMinutesChange(e.target.value)}
                />

                <input
                    class="pl-1"
                    name="long-break"
                    type="number"
                    value={minutes}
                    min={0}
                    max={999999}
                    onChange={(e) => handleMinutesChange(e.target.value)}
                />
            </div>
        </div>
    )
}