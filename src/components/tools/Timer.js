import React, { useEffect } from 'react';
import { useState } from 'react';

import Play from '../../icons/Play';
import Pause from '../../icons/Pause';
import Restart from '../../icons/Restart';
import Settings from '../../icons/Settings'

export default function Timer() {
    const DEFAULT_TIMER_LENGTH = 25 * 60;
    const DEFAULT_INPUT_MINUTES = 25;
    const DEFAULT_FORMATTED_TIME = "25:00";

    const [timerLengthInSeconds, setTimerLengthInSeconds] = useState(DEFAULT_INPUT_MINUTES * 60);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalId, setIntervalId] = useState();
    const [formattedTime, setFormattedTime] = useState(DEFAULT_FORMATTED_TIME);
    const [inputMinutes, setInputMinutes] = useState(DEFAULT_INPUT_MINUTES);

    const [pomodoroSessions, setPomodoroSessions] = useState(0);
    const [pomodoroStatus, setworkStatus] = useState(false);
    const [shortBreakStatus, setShortBreakStatus] = useState(false);
    const [longBreakStatus, setLongBreakStatus] = useState(false);

    useEffect(() => {
        if (timerLengthInSeconds === 0) {
            setIsPlaying(false);
            clearInterval(intervalId);
            // setTimerLengthInSeconds(DEFAULT_TIMER_LENGTH);
            setPomodoroSessions(pomodoroSessions + 1);
            console.log("Timer completed!");
        }
    }, [timerLengthInSeconds, intervalId]);

    useEffect(() => {
        setFormattedTime(getFormattedTime());
    });

    function pad(num) {
        return (num < 10) ? ("0" + num) : num;
    }

    const handleInputMinutesChange = (minutes) => {
        if (minutes > 999 || minutes < 1) {
            console.log("Minutes cannot be " + minutes + ". It must be between 1 and 999.");
            setTimerLengthInSeconds(DEFAULT_TIMER_LENGTH);
            setInputMinutes(DEFAULT_FORMATTED_TIME);
        } else {
            console.log("Minutes is now " + minutes);
            setTimerLengthInSeconds(minutes * 60);
            setInputMinutes(minutes);
        }
    }

    const handlePomodoroTypeClick = () => {
        setPomodoroSessions(true);
        setShortBreakStatus(false);
        setLongBreakStatus(false);
    }

    const handleShortTypeClick = () => {
        setShortBreakStatus(true);
        setPomodoroSessions(false);
        setLongBreakStatus(false);
    }

    const handleLongTypeClick = () => {
        setLongBreakStatus(true);
        setPomodoroSessions(false);
        setShortBreakStatus(false);
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
        if (isPlaying !== true && timerLengthInSeconds === 0) {
            setTimerLengthInSeconds(inputMinutes * 60);
        } 
    }

    const onTimerToggle = () => {
        if (!isPlaying) {
            playTimer();
        } else {
            pauseTimer();
        }
    }
    
    const playTimer = () => {
        setIsPlaying(true);
        const timerIntervalId = setInterval(handleTimerInterval, 1000);
        setIntervalId(timerIntervalId);
    }
            
    const pauseTimer = () => {
        setIsPlaying(false);
        clearInterval(intervalId);
        console.log("Timer was paused.");
    }
    
    const handleTimerInterval = () => {
        setTimerLengthInSeconds(timerLengthInSeconds => timerLengthInSeconds - 1);
        getFormattedTime();
    }

    const getFormattedTime = () => {
        const formattedMinutes = Math.floor(timerLengthInSeconds / 60);
        const formattedSeconds = timerLengthInSeconds % 60;
        return formattedMinutes + ":" + pad(formattedSeconds);
    }
    
    /* idea: after work timer completes, transition to break
    - if less than 3 sessions, short break
    - if more than 4 sessions, long break
    1. let user input number of minutes for timer (default 25)
    2. when user starts timer, start counting down seconds and minutes
    3. once timer is done, play a sound and add to # of sessions completed 
    */

    return (
        <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-lg max-w-sm">
            <h3 class="text-xl text-white">timer</h3>

            <div class="flex justify-between text-white">
                <h3 class="mt-3 text-5xl font-bold text-white">{formattedTime}</h3>
                <div class="flex space-x-1">
                    <button onClick={onTimerToggle} type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {isPlaying? <Pause /> : <Play />}
                    </button>

                    <button onClick={onRestartClick} type="button" class="mt-4">
                        <Restart />
                    </button>
                </div>
            </div>


            <div class="flex justify-between mt-4">
                <button onClick={handlePomodoroTypeClick} class="focus:underline text-white decoration-blue-500">pomodoro</button>
                <button onClick={handleShortTypeClick} class="focus:underline text-white decoration-blue-500">short break</button>
                <button onClick={handleLongTypeClick} class="focus:underline text-white decoration-blue-500">long break</button>

                <button type="button" class="">
                    <Settings />
                </button>
            </div>

            {/* <div class="flex justify-between">
                <p class="mt-2 text-sm text-gray-300">
                    You've completed {pomodoroSessions} sessions so far!
                </p>
            </div> */}
            
            <div class="flex justify-between mt-4">
                <input
                    class="pl-1"
                    name="minutes"
                    type="number"
                    value={inputMinutes}
                    min={0}
                    max={999999}
                    onChange={(e) => handleInputMinutesChange(e.target.value)}
                />

                {/* <input
                    class="pl-1"
                    name="short-break"
                    type="number"
                    value={inputMinutes}
                    min={0}
                    max={999999}
                    onChange={(e) => handleInputMinutesChange(e.target.value)}
                /> */}

                {/* <input
                    class="pl-1"
                    name="long-break"
                    type="number"
                    value={inputMinutes}
                    min={0}
                    max={999999}
                    onChange={(e) => handleInputMinutesChange(e.target.value)}
                /> */}
            </div>
        </div>
    )
}