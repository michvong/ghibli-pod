import React, { useEffect } from 'react';
import Sparkles from '../../assets/icons/sparkles.png'

export default function Environments() {
    return (
        <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
            <div class="flex justify-between">
                <div class="flex justify-start">
                    <h3 class="mr-4 text-xl text-white">environments</h3>
                </div>
            </div>

            <div class="flex space-x-8 mt-4 w-25 hover:overflow-x-scroll overflow-hidden scrollbar-hide">
                <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                        <img src={Sparkles} alt="sparkles" class="w-8"/>
                    </span>
                </button>

                <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                        <img src={Sparkles} alt="sparkles" class="w-8"/>
                    </span>
                </button>

                <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                        <img src={Sparkles} alt="sparkles" class="w-8"/>
                    </span>
                </button>

                <button class="flex-shrink-0 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative p-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
                        <img src={Sparkles} alt="sparkles" class="w-8"/>
                    </span>
                </button>
            </div>
        </div>
    )
}