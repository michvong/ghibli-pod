import React, { useState } from 'react';
import { Checkbox } from '@material-tailwind/react';

export default function ToDoList({ handleToDoClick }) {
  const [newTask, setNewTask] = useState('');

  const [tasks, setTasks] = useState([]);

  const onMinimize = () => {
    handleToDoClick();
  };

  const handleTaskClick = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteClick = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div class>
      <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
        <div class="flex justify-between">
          <div class="flex justify-start">
            <h3 class="mr-4 text-xl text-white">to-do</h3>
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

        <div class="flex flex-col mt-3 mb-4">
          <div>
            {tasks.map((task, index) => (
              <div key={index} class="flex justify-between items-center">
                <Checkbox
                  class="p-3"
                  checked={task.completed}
                  onChange={() => handleTaskClick(index)}
                />

                <input
                  type="text"
                  placeholder="enter your task"
                  class={`truncate mr-3 px-2 py-0.5 bg-gray-800 w-full rounded-md text-white/50 text-base ${
                    task.completed ? 'line-through text-gray-400' : ''
                  }`}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />

                <button onClick={() => handleDeleteClick(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="hover:stroke-red-600"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            ))}

            <button
              class="flex justify-between pl-4 py-1 w-full rounded-lg text-white rounded-md hover:bg-white/10 text-white/50 text-base"
              onClick={() => {
                setTasks([...tasks, { task: newTask, completed: false }]);
                setNewTask('');
              }}
            >
              + <span class="text-white/50 mr-2">add a new task</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
