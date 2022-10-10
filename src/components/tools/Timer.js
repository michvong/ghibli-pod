import React, { useEffect } from 'react';
import { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";

import Minimize from '../../icons/Minimize';
import Play from '../../icons/Play';
import Pause from '../../icons/Pause';
import Restart from '../../icons/Restart';
import Settings from '../../icons/Settings'

export default function Timer() {
    const DEFAULT_POMODORO_INPUT_MINUTES = 25;
    const DEFAULT_POMODORO_LENGTH = 25 * 60;
    const DEFAULT_POMODORO_FORMATTED_TIME = "25:00";
    
    const DEFAULT_SHORT_INPUT_MINUTES = 5;
    const DEFAULT_SHORT_LENGTH = 5 * 60;
    const DEFAULT_SHORT_FORMATTED_TIME = "5:00";

    const DEFAULT_LONG_INPUT_MINUTES = 15;
    const DEFAULT_LONG_LENGTH = 25 * 60;
    const DEFAULT_LONG_FORMATTED_TIME = "15:00";

    const [timerLengthInSeconds, setTimerLengthInSeconds] = useState(DEFAULT_POMODORO_INPUT_MINUTES * 60);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalId, setIntervalId] = useState();
    const [formattedTime, setFormattedTime] = useState(DEFAULT_POMODORO_FORMATTED_TIME);

    const [inputPomodoroMinutes, setPomodoroMinutes] = useState(DEFAULT_POMODORO_INPUT_MINUTES);
    const [inputShortMinutes, setShortMinutes] = useState(DEFAULT_SHORT_INPUT_MINUTES);
    const [inputLongMinutes, setLongMinutes] = useState(DEFAULT_LONG_INPUT_MINUTES);

    const [pomodoroSessions, setPomodoroSessions] = useState(0);
    const [isPomodoro, setIsPomodoro] = useState(true);
    const [isShortBreak, setIsShortBreak] = useState(false);
    const [isLongBreak, setIsLongBreak] = useState(false);

    const [isAutoTransition, setIsAutoTransition] = useState(false);

    useEffect(() => {
        if (timerLengthInSeconds === 0) {
            setIsPlaying(false);
            clearInterval(intervalId);
            console.log("Timer completed!");

            if (isPomodoro) {
                setPomodoroSessions(pomodoroSessions + 1);
            }

            if (isAutoTransition) {
                handleTimerTransition();
            }
        }
    }, [timerLengthInSeconds, intervalId]);

    useEffect(() => {
        setFormattedTime(getFormattedTime());
    });

    function pad(num) {
        return (num < 10) ? ("0" + num) : num;
    }

    const handleTimerTransition = () => {
        if (isPomodoro) {
            handlePomodoroTransition();
        }
    }

    const handlePomodoroTransition = () => {
        setIsPomodoro(false);

        if (pomodoroSessions <= 3) {
            setIsShortBreak(true);
            setTimerLengthInSeconds(inputShortMinutes * 60);
        } else {
            setIsLongBreak(true);
            setTimerLengthInSeconds(inputLongMinutes * 60);
        }

        playTimer();
    }

    const handleBreakTransition = () => {
        if (isShortBreak) {
            setIsShortBreak(false);
        } else {
            setIsLongBreak(false);
        }

        setIsPomodoro(true);
        setTimerLengthInSeconds(inputPomodoroMinutes * 60);
        playTimer();
    }

    const handlePomodoroChange = (minutes) => {
        if (minutes > 999 || minutes < 1) {
            console.log("Minutes cannot be " + minutes + ". It must be between 1 and 999.");
            setTimerLengthInSeconds(DEFAULT_POMODORO_LENGTH);
            setPomodoroMinutes(DEFAULT_POMODORO_FORMATTED_TIME);
        } else {
            console.log("Pomodoro is now " + minutes);
            if (isPomodoro) {
                setTimerLengthInSeconds(minutes * 60);
            }
            setPomodoroMinutes(minutes);
        }
    }

    const handleShortBreakChange = (minutes) => {
        if (minutes > 999 || minutes < 1) {
            console.log("Minutes cannot be " + minutes + ". It must be between 1 and 999.");
            setTimerLengthInSeconds(DEFAULT_SHORT_LENGTH);
            setShortMinutes(DEFAULT_SHORT_FORMATTED_TIME);
        } else {
            console.log("Short break is now " + minutes);
            if (isShortBreak) {
                setTimerLengthInSeconds(minutes * 60);
            }
            setShortMinutes(minutes);
        }
    }

    const handleLongBreakChange = (minutes) => {
        if (minutes > 999 || minutes < 1) {
            console.log("Minutes cannot be " + minutes + ". It must be between 1 and 999.");
            setTimerLengthInSeconds(DEFAULT_LONG_LENGTH);
            setLongMinutes(DEFAULT_LONG_FORMATTED_TIME);
        } else {
            console.log("Long break is now " + minutes);
            if (isLongBreak) {
                setTimerLengthInSeconds(minutes * 60);
            }
            setLongMinutes(minutes);
        }
    }

    const handlePomodoroTypeClick = () => {
        setIsPlaying(false);
        clearInterval(intervalId);

        setIsPomodoro(true);
        setIsShortBreak(false);
        setIsLongBreak(false);

        setTimerLengthInSeconds(inputPomodoroMinutes * 60);
    }

    const handleShortTypeClick = () => {
        setIsPlaying(false);
        clearInterval(intervalId);

        setIsShortBreak(true);
        setIsPomodoro(false);
        setIsLongBreak(false);

        setTimerLengthInSeconds(inputShortMinutes * 60);
    }

    const handleLongTypeClick = () => {
        setIsPlaying(false);
        clearInterval(intervalId);

        setIsLongBreak(true);
        setIsPomodoro(false);
        setIsShortBreak(false);

        setTimerLengthInSeconds(inputLongMinutes * 60);
    }
    
    const onSettingsClick = () => {

    }

    const onAutoTransitionClick = () => {
        if (isAutoTransition) {
            setIsAutoTransition(false);
        } else {
            setIsAutoTransition(true);
        }
    }

    const onRestartClick = () => {
        if (isPlaying !== true && timerLengthInSeconds === 0) {
            setTimerLengthInSeconds(inputPomodoroMinutes * 60);
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

    return (
        <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-lg max-w-sm">
            <div class="flex justify-between">
                <h3 class="text-xl text-white">timer</h3>
                <button>
                    <Minimize />
                </button>
            </div>

            <div class="flex justify-between text-white">
                <h3 class="mt-3 text-5xl font-bold text-white">{formattedTime}</h3>
                <div class="flex space-x-1">
                    <button onClick={onTimerToggle} type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {isPlaying ? <Pause /> : <Play />}
                    </button>

                    <button onClick={onRestartClick} type="button" class="mt-4">
                        <Restart />
                    </button>
                </div>
            </div>


            <div class="flex justify-between mt-4">
                <button onClick={handlePomodoroTypeClick} class={"text-white decoration-blue-500 " + (isPomodoro ? 'underline' : 'no-underline')}>pomodoro</button>
                <button onClick={handleShortTypeClick} class={"text-white decoration-blue-500 " + (isShortBreak ? 'underline' : 'no-underline')}>short break</button>
                <button onClick={handleLongTypeClick} class={"text-white decoration-blue-500 " + (isLongBreak ? 'underline' : 'no-underline')}>long break</button>

                <button type="button" class="">
                    <Settings />
                </button>
            </div>

            {/* <div class="flex justify-between">
                <p class="mt-2 text-sm text-gray-300">
                    You've completed {pomodoroSessions} sessions so far!
                </p>
            </div> */}
            
            <div class="flex justify-between mt-4 mr-12">
                <input
                    class="pl-1"
                    name="minutes"
                    type="number"
                    value={inputPomodoroMinutes}
                    min={0}
                    max={99999}
                    onChange={(e) => handlePomodoroChange(e.target.value)}
                />

                <input
                    class="pl-1"
                    name="short-break"
                    type="number"
                    value={inputShortMinutes}
                    min={0}
                    max={99999}
                    onChange={(e) => handleShortBreakChange(e.target.value)}
                />

                <input
                    class="pl-1"
                    name="long-break"
                    type="number"
                    value={inputLongMinutes}
                    min={0}
                    max={99999}
                    onChange={(e) => handleLongBreakChange(e.target.value)}
                />
            </div>

            <div class="mt-2 flex justify-start">
                <p class="mr-2 text-sm text-gray-300">auto-transition timer</p>
                <Checkbox onClick={onAutoTransitionClick} color="blue" />
            </div>
        </div>
    )
}