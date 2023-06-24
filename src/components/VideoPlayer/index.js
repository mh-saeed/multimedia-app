import React from "react";
import { styles } from "./styled";

const VideoPlayer = ({ path }) => {
  const isYouTubeUrl = path.includes("youtube.com");

  if (isYouTubeUrl) {
    const videoId = extractYouTubeVideoId(path);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div style={styles.div}>
        <iframe
          width="100%"
          height="400"
          src={embedUrl}
          title="YouTube video player"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div>
      <video controls style={styles.video}>
        <source src={path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const extractYouTubeVideoId = (url) => {
  const videoIdMatch = url.match(
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v=|embed\/|v\/|youtu\.be\/)([\w-]{11})/
  );

  if (videoIdMatch && videoIdMatch[1]) {
    return videoIdMatch[1];
  }

  return null;
};

export default VideoPlayer;
