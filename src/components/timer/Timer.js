import React, { useEffect } from 'react';
import { useState } from 'react';

import Play from '../../assets/icons/play.svg';
import Pause from '../../assets/icons/pause.svg';
import Star from '../../assets/icons/star.svg';

import NotifSound from '../../assets/audio/bubble_bell.mp3';

export default function Timer() {
  const DEFAULT_POMODORO_INPUT_MINUTES = 25;
  const DEFAULT_POMODORO_LENGTH = 25 * 60;
  const DEFAULT_POMODORO_FORMATTED_TIME = '25:00';

  const DEFAULT_SHORT_INPUT_MINUTES = 5;
  const DEFAULT_SHORT_LENGTH = 5 * 60;
  const DEFAULT_SHORT_FORMATTED_TIME = '5:00';

  const DEFAULT_LONG_INPUT_MINUTES = 15;
  const DEFAULT_LONG_LENGTH = 25 * 60;
  const DEFAULT_LONG_FORMATTED_TIME = '15:00';

  const NUM_SESSIONS_REQUIRED_LONG_BREAK = 4;

  const audio = new Audio(NotifSound);

  const [timerLengthInSeconds, setTimerLengthInSeconds] = useState(
    DEFAULT_POMODORO_INPUT_MINUTES * 60
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [formattedTime, setFormattedTime] = useState(DEFAULT_POMODORO_FORMATTED_TIME);

  const [inputPomodoroMinutes, setInputPomodoroMinutes] = useState(DEFAULT_POMODORO_INPUT_MINUTES);
  const [inputShortMinutes, setInputShortMinutes] = useState(DEFAULT_SHORT_INPUT_MINUTES);
  const [inputLongMinutes, setInputLongMinutes] = useState(DEFAULT_LONG_INPUT_MINUTES);

  const [pomodoroSessions, setPomodoroSessions] = useState(0);
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [isShortBreak, setIsShortBreak] = useState(false);
  const [isLongBreak, setIsLongBreak] = useState(false);

  const [isAutoTransition, setIsAutoTransition] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  useEffect(() => {
    if (timerLengthInSeconds === 0) {
      audio.play();
      setIsPlaying(false);
      clearInterval(intervalId);
      console.log('Timer completed!');

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
    return num < 10 ? '0' + num : num;
  }

  const handleTimerTransition = () => {
    if (isPomodoro) {
      handlePomodoroTransition();
    } else {
      handleBreakTransition();
    }
  };

  const handlePomodoroTransition = () => {
    setIsPomodoro(false);

    if (pomodoroSessions <= NUM_SESSIONS_REQUIRED_LONG_BREAK) {
      setIsShortBreak(true);
      setTimerLengthInSeconds(inputShortMinutes * 60);
    } else {
      setIsLongBreak(true);
      setTimerLengthInSeconds(inputLongMinutes * 60);
    }

    playTimer();
  };

  const handleBreakTransition = () => {
    if (isShortBreak) {
      setIsShortBreak(false);
    } else {
      setIsLongBreak(false);
    }

    setIsPomodoro(true);
    setTimerLengthInSeconds(inputPomodoroMinutes * 60);
    playTimer();
  };

  const handlePomodoroChange = (minutes) => {
    if (minutes > 999 || minutes < 1) {
      console.log('Minutes cannot be ' + minutes + '. It must be between 1 and 999.');
      if (isPomodoro && !isPlaying) {
        setTimerLengthInSeconds(DEFAULT_POMODORO_LENGTH);
      }
      setInputPomodoroMinutes(DEFAULT_POMODORO_FORMATTED_TIME);
    } else {
      console.log('Pomodoro is now ' + minutes);
      if (isPomodoro && !isPlaying) {
        setTimerLengthInSeconds(minutes * 60);
      }
      setInputPomodoroMinutes(minutes);
    }
  };

  const handleShortBreakChange = (minutes) => {
    if (minutes > 999 || minutes < 1) {
      console.log('Minutes cannot be ' + minutes + '. It must be between 1 and 999.');
      if (isShortBreak && !isPlaying) {
        setTimerLengthInSeconds(DEFAULT_SHORT_LENGTH);
      }
      setInputShortMinutes(DEFAULT_SHORT_FORMATTED_TIME);
    } else {
      console.log('Short break is now ' + minutes);
      if (isShortBreak && !isPlaying) {
        setTimerLengthInSeconds(minutes * 60);
      }
      setInputShortMinutes(minutes);
    }
  };

  const handleLongBreakChange = (minutes) => {
    if (minutes > 999 || minutes < 1) {
      console.log('Minutes cannot be ' + minutes + '. It must be between 1 and 999.');
      if (isLongBreak && !isPlaying) {
        setTimerLengthInSeconds(DEFAULT_LONG_LENGTH);
      }
      setInputLongMinutes(DEFAULT_LONG_FORMATTED_TIME);
    } else {
      console.log('Long break is now ' + minutes);
      if (isLongBreak && !isPlaying) {
        setTimerLengthInSeconds(minutes * 60);
      }
      setInputLongMinutes(minutes);
    }
  };

  const handlePomodoroTypeClick = () => {
    setIsPlaying(false);
    clearInterval(intervalId);

    setIsPomodoro(true);
    setIsShortBreak(false);
    setIsLongBreak(false);

    if (isNaN(inputPomodoroMinutes)) {
      setTimerLengthInSeconds(DEFAULT_POMODORO_LENGTH);
    } else {
      setTimerLengthInSeconds(inputPomodoroMinutes * 60);
    }
  };

  const handleShortTypeClick = () => {
    setIsPlaying(false);
    clearInterval(intervalId);

    setIsShortBreak(true);
    setIsPomodoro(false);
    setIsLongBreak(false);

    if (isNaN(inputShortMinutes)) {
      setTimerLengthInSeconds(DEFAULT_SHORT_LENGTH);
    } else {
      setTimerLengthInSeconds(inputShortMinutes * 60);
    }
  };

  const handleLongTypeClick = () => {
    setIsPlaying(false);
    clearInterval(intervalId);

    setIsLongBreak(true);
    setIsPomodoro(false);
    setIsShortBreak(false);

    if (isNaN(inputLongMinutes)) {
      setTimerLengthInSeconds(DEFAULT_LONG_LENGTH);
    } else {
      setTimerLengthInSeconds(inputLongMinutes * 60);
    }
  };

  const onSettingsClick = () => {
    if (isSettingsVisible) {
      setIsSettingsVisible(false);
    } else {
      setIsSettingsVisible(true);
    }
  };

  const onAutoTransitionClick = () => {
    if (isAutoTransition) {
      setIsAutoTransition(false);
    } else {
      setIsAutoTransition(true);
    }
  };

  const onRestartClick = () => {
    if (!isPlaying) {
      if (isPomodoro) {
        setTimerLengthInSeconds(inputPomodoroMinutes * 60);
      } else if (isShortBreak) {
        setTimerLengthInSeconds(inputShortMinutes * 60);
      } else if (isLongBreak) {
        setTimerLengthInSeconds(inputLongMinutes * 60);
      }
    }
  };

  const onTimerToggle = () => {
    if (!isPlaying) {
      playTimer();
    } else {
      pauseTimer();
    }
  };

  const playTimer = () => {
    setIsPlaying(true);
    const timerIntervalId = setInterval(handleTimerInterval, 1000);
    setIntervalId(timerIntervalId);
  };

  const pauseTimer = () => {
    setIsPlaying(false);
    clearInterval(intervalId);
    console.log('Timer was paused.');
  };

  const handleTimerInterval = () => {
    setTimerLengthInSeconds((timerLengthInSeconds) => timerLengthInSeconds - 1);
    getFormattedTime();
  };

  const getFormattedTime = () => {
    const formattedMinutes = Math.floor(timerLengthInSeconds / 60);
    const formattedSeconds = timerLengthInSeconds % 60;
    return formattedMinutes + ':' + pad(formattedSeconds);
  };

  return (
    <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-sm">
      <div class="flex justify-between">
        <div class="flex justify-start">
          <h3 class="mr-4 text-xl text-white">timer</h3>
          <div class="mt-2 flex justify-between gap-1">
            <div class={pomodoroSessions >= 1 ? 'visible' : 'invisible'}>
              <img src={Star} alt="star" />
            </div>

            <div class={pomodoroSessions >= 2 ? 'visible' : 'invisible'}>
              <img src={Star} alt="star" />
            </div>

            <div class={pomodoroSessions >= 3 ? 'visible' : 'invisible'}>
              <img src={Star} alt="star" />
            </div>

            <div class={pomodoroSessions >= 4 ? 'visible' : 'invisible'}>
              <img src={Star} alt="star" />
            </div>
          </div>
        </div>

        <button>
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

      <div class="flex justify-between text-white">
        <h3 class="mt-3 text-5xl font-bold text-white">{formattedTime}</h3>
        <div class="flex space-x-1">
          <button
            onClick={onTimerToggle}
            type="button"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isPlaying ? <img src={Pause} alt="pause" /> : <img src={Play} alt="play" />}
          </button>

          <button onClick={onRestartClick} type="button" class="mt-4">
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
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-4">
        <button
          onClick={handlePomodoroTypeClick}
          class={'text-white decoration-blue-500 ' + (isPomodoro ? 'underline' : 'no-underline')}
        >
          pomodoro
        </button>
        <button
          onClick={handleShortTypeClick}
          class={'text-white decoration-blue-500 ' + (isShortBreak ? 'underline' : 'no-underline')}
        >
          short break
        </button>
        <button
          onClick={handleLongTypeClick}
          class={'text-white decoration-blue-500 ' + (isLongBreak ? 'underline' : 'no-underline')}
        >
          long break
        </button>

        <button onClick={onSettingsClick} type="button" class="">
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
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>

      <div class={isSettingsVisible ? 'visible' : 'hidden'}>
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

        <div class="mt-4 flex justify-start items-center">
          <p class="mr-3 text-sm text-gray-300">auto-transition timer</p>
          <input
            id="default-checkbox"
            onClick={onAutoTransitionClick}
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
