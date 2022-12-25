import { useState } from 'react';
import Up from '../../assets/icons/chevron-up.svg';
import Down from '../../assets/icons/chevron-down.svg';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button
        className="fixed z-30 flex items-center cursor-pointer left-3 bottom-5 bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5
            text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <img src={Up} />
      </button>

      <div
        className={`top-0 left-0 bg-gray-900 p-3 text-white fixed h-full z-40 ease-in-out duration-500 ${
          showSidebar ? 'translate-x-0 ' : 'translate-y-full'
        }`}
      >
        <button
          className="flex text-4xl text-white items-center cursor-pointer mt-2 z-50
            bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600
            dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <img src={Down} />
        </button>
      </div>
    </>
  );
}