import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer(playlistId) {
    const opts = {
        width: window.innerWidth,
        height: window.innerHeight,
        playerVars: {
            autoplay: 1, // video should auto-play when loaded
            // controls: 0, // this doesn't work if autoplay is on
            // disablekb: 1,
            modestbranding: 1,
            list: 'PLI3qJXEG_OMQSMJ7koFkwyGA0Njn4SJKo',
            loop: 1,
            start: 1
        },
    };

    return (
        <div class="pointer-events-none">
            <YouTube
                opts={opts}
            />
        </div>
    )
}