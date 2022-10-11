import React, { useEffect } from 'react';

export default function Environments() {
    return (
        <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-sm">
            <div class="flex justify-between">
                <div class="flex justify-start">
                    <h3 class="mr-4 text-xl text-white">environments</h3>
                </div>
            </div>

            <div class="mt-4">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        ✨
                    </span>
                </button>
            </div>
        </div>
    )
}