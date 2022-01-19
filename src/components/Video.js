import React, {useRef, useState} from 'react'
import './Video.css';
import vid from '../vid.mp4'
const Video = () => { 
    const [isVideoPlaying,setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if(isVideoPlaying){
            //stop video
            videoRef.current.pause()
            setIsVideoPlaying(false);


            
        }
        else{
            //play video
            videoRef.current.play();
            setIsVideoPlaying(true)
        }

    }
    return (

        <div className="video">
        <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video-player"
        src = {vid}
        alt ='Ollygram vid'
        loop={true}
        />
            
        </div>
    )
}

export default Video;
