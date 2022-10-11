import React, { useEffect } from 'react';
import { Tooltip } from "@material-tailwind/react";

import Sparkles from '../../assets/icons/sparkles.png'
import Dragon from '../../assets/icons/dragon.png'
import Fire from '../../assets/icons/fire.png'
import WaterWave from '../../assets/icons/water_wave.png'

export default function Environments() {
    return (
        <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
            <div class="flex justify-between">
                <div class="flex justify-start">
                    <h3 class="text-xl text-white">environments</h3>
                </div>

                {/* <div class="flex justify-between space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="hover:stroke-gray-400 active:stroke-gray-700 self-center"
                        width="18" height="18"
                        viewBox="0 0 24 24" fill="none"
                        stroke="#ffffff" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="hover:stroke-gray-400 active:stroke-gray-700 self-center"
                        width="18" height="18"
                        viewBox="0 0 24 24" fill="none"
                        stroke="#ffffff" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </div> */}
            </div>

            <div class="flex flex-col hover:scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-full overflow-x-scroll overflow-hidden">
                <div class="flex space-x-6 mt-4 w-25 pb-3">
                    <Tooltip content="mix" placement="bottom">
                        <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="relative p-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                                <img src={Sparkles} alt="sparkles" class="w-8"/>
                            </span>
                        </button>
                    </Tooltip>

                    <Tooltip content="spirited away" placement="bottom">
                        <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="relative p-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                                <img src={Dragon} alt="dragon" class="w-8"/>
                            </span>
                        </button>
                    </Tooltip>

                    <Tooltip content="howl's moving castle" placement="bottom">
                        <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="relative p-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                                <img src={Fire} alt="fire" class="w-8"/>
                            </span>
                        </button>
                    </Tooltip>

                    <Tooltip content="ocean waves" placement="bottom">
                        <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="relative p-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                                <img src={WaterWave} alt="water wave" class="w-8"/>
                            </span>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}