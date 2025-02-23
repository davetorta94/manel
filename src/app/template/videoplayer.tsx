"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} className="w-full h-full" />;
};

export default VideoPlayer;
