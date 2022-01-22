import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './VideoHeader.css';
import {Link} from 'react-router-dom'
const VideoHeader = () => {
  return <div className="video-header p-2">
      <ArrowBackIosIcon />
     <Link to="header"> <h3>Ollygram Rules</h3></Link>
      <CameraAltIcon />
  </div>;
};

export default VideoHeader;
