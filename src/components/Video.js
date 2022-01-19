import React, {useRef, useState} from 'react'
import './Video.css';
 
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
const Video = ({shares, url,likes, channel, avatarSrc, song}) => { 
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
        <VideoHeader />
        <video

        ref={videoRef}
        onClick={onVideoPress}
        className="video-player"
        src = {url}
        alt ='Ollygram vid'
        loop={true}
        />
        < VideoFooter
        channel={channel}
        likes={likes}
         shares={shares}
         avatarSrc={avatarSrc}
         song={song}


         
        />
            
        </div>
    )
}

export default Video;
