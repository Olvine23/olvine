import React, {useRef, useState} from 'react'
import './Video.css';
 
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
const Video = ({shares, url,likes, channel, avatarSrc, song}) => { 
    const [isVideoPlaying,setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoScroll =() => {
        if(isVideoPlaying){
            videoRef.current.pause()
            setIsVideoPlaying(false)
        }
    }
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
        <div></div>
        <video
        

        ref={videoRef}
        onClick={onVideoPress}
        onScroll={onVideoScroll}
        className="video-player"
        src = {url}
        alt ='Ollygram vid'
        loop={false}
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
