import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './VideoHeader.css';

const VideoHeader = () => {
  return <div className="video-header p-4">
      <ArrowBackIosIcon />
      <h3>Ollygram Rules</h3>
      <CameraAltIcon />
  </div>;
};

export default VideoHeader;
