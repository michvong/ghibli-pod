import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import EnvironmentList from './EnvironmentList';
import Draggable from 'react-draggable';
import api from '../../services/api';

export default function VideoPlayer({ isEnvironmentsVisible, handleEnvironmentsClick }) {
  const [currentPlaylistId, setCurrentPlaylistId] = useState();
  const [player, setPlayer] = useState();

  const [currentVideoTitle, setCurrentVideoTitle] = useState();
  const [currentVideoChannel, setCurrentVideoChannel] = useState('n/a');
  const [currentVideoId, setCurrentVideoId] = useState();
  const [currentChannelId, setCurrentChannelId] = useState();
  const [currentChannelIconUrl, setCurrentChannelIconUrl] = useState();

  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [currentPlaylistLength, setCurrentPlaylistLength] = useState();

  const [isNextClicked, setisNextClicked] = useState(false);
  const [isPrevClicked, setisPrevClicked] = useState(false);

  useEffect(() => {
    if (isNextClicked) {
      if (currentVideoIdx + 1 === currentPlaylistLength) {
        setCurrentVideoIdx(0);
      } else {
        setCurrentVideoIdx(currentVideoIdx + 1);
      }
      setisNextClicked(false);
      // console.log(currentVideoIdx);
    }
  }, [isNextClicked, currentVideoIdx, currentPlaylistLength]);

  useEffect(() => {
    if (isPrevClicked) {
      console.log('useeffect');
      if (currentVideoIdx === 0) {
        setCurrentVideoIdx(currentPlaylistLength - 1);
      } else {
        setCurrentVideoIdx(currentVideoIdx - 1);
      }
      setisPrevClicked(false);
    }
  }, [isPrevClicked, currentVideoIdx, currentPlaylistLength]);

  useEffect(() => {
    api
      .getPlaylistItemInfo(currentPlaylistId)
      .then((response) => {
        setCurrentVideoTitle(response.data.items[currentVideoIdx].snippet.title);
        setCurrentVideoChannel(response.data.items[currentVideoIdx].snippet.videoOwnerChannelTitle);
        setCurrentVideoId(response.data.items[currentVideoIdx].snippet.resourceId.videoId);
        setCurrentChannelId(response.data.items[currentVideoIdx].snippet.videoOwnerChannelId);
        setCurrentPlaylistLength(response.data.items.length);
      })
      .catch((err) => {});
  }, [currentPlaylistId, currentVideoIdx]);

  useEffect(() => {
    console.log(currentChannelId);
    api
      .getChannelInfo(currentChannelId)
      .then((response) => {
        console.log(response);
        setCurrentChannelIconUrl(response.data.items[0].snippet.thumbnails.default.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentChannelId, currentVideoIdx]);

  const opts = {
    width: window.innerWidth,
    height: window.innerHeight,
    playerVars: {
      autoplay: 1, // video should auto-play when loaded
      // controls: 0, // this doesn't work if autoplay is on
      // disablekb: 1,
      modestbranding: 1,
      list: currentPlaylistId,
      loop: 1,
      start: 1,
    },
  };

  const handleVideoEnd = () => {
    setCurrentVideoIdx(currentVideoIdx + 1);
    if (currentVideoIdx + 1 === currentPlaylistLength) {
      setCurrentVideoIdx(0);
    }
  };

  const handlePlaylistSelect = (playlistId) => {
    setCurrentPlaylistId(playlistId);
    player.loadPlaylist(playlistId);
    setCurrentVideoIdx(0);
  };

  const handleNextSelect = () => {
    setisNextClicked(true);
    player.nextVideo();
  };

  const handlePrevSelect = () => {
    setisPrevClicked(true);
    player.previousVideo();
  };

  const handleVolumeMute = () => {
    player.mute();
  };

  const handleVolumeUnmute = () => {
    player.unMute();
  };

  const handleVideoToggle = () => {
    if (player.getPlayerState() === 2) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  };

  return (
    <div>
      <div class="absolute pointer-events-none">
        <YouTube opts={opts} onEnd={handleVideoEnd} onReady={(event) => setPlayer(event.target)} />
      </div>

      <Draggable>
        <div class={isEnvironmentsVisible ? 'visible' : 'hidden'}>
          <EnvironmentList
            class="absolute"
            handlePlaylistSelect={handlePlaylistSelect}
            currentPlaylistId={currentPlaylistId}
            currentVideoIdx={currentVideoIdx}
            handleNextSelect={handleNextSelect}
            handlePrevSelect={handlePrevSelect}
            handleVolumeMute={handleVolumeMute}
            handleVolumeUnmute={handleVolumeUnmute}
            handleEnvironmentsClick={handleEnvironmentsClick}
            handleVideoToggle={handleVideoToggle}
            currentVideoTitle={currentVideoTitle}
            currentVideoChannel={currentVideoChannel}
            currentVideoId={currentVideoId}
            currentChannelIconUrl={currentChannelIconUrl}
            currentPlaylistLength={currentPlaylistLength}
          />
        </div>
      </Draggable>
    </div>
  );
}
