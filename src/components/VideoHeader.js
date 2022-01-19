import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './VideoHeader.css';

const VideoHeader = () => {
  return <div className="video-header">
      <ArrowBackIosIcon />
      <h3>Ollygram Rules</h3>
      <CameraAltIcon />
  </div>;
};

export default VideoHeader;
