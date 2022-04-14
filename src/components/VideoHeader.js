import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import './VideoHeader.css';
import {Link} from 'react-router-dom'
const VideoHeader = () => {
  return <div className="video-header p-2">
     <div className ="z-50 hover:text-orange-200">
       <Link to = "/">
      <ArrowBackIosIcon  />
      </Link>
      </div>
     <Link className= "z-50" to="/youtube"> <h3 className="uppercase z-15 font-bold text-lg">Ollygram Rules</h3></Link>
      <div  className ="z-50 hover:text-orange-200">
        <Link to ="/edit">
      <CameraAltIcon className ="z-100" />
      </Link>
      </div>
  </div>;
};

export default VideoHeader;
