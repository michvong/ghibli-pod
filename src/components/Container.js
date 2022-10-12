import React from 'react';

export default function Container({ width, height }) {
    return (
        <div class={"px-" + (width) + " py-" + (height) + "block bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs"}></div>
    )
}