import React, {useRef, useState, useEffect} from 'react'
import './Video.css';
import useElementOnScreen  from './useElementOnScreen'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
const Video = ({shares, url,likes, channel, avatarSrc, song}) => { 
    const [isVideoPlaying,setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }

    const isVisibile = useElementOnScreen(options, videoRef)
     
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
    };

    useEffect(() => {
        if (isVisibile) {
          if (!isVideoPlaying) {        
            videoRef.current.play();
            setIsVideoPlaying(true)
          }
        }
        else {
          if (isVideoPlaying) {        
            videoRef.current.pause();
            setIsVideoPlaying(false)
          }
        }
      }, [isVisibile])
    return (

        <div className="video">
        <VideoHeader />
        <div></div>
        <video
        

        ref={videoRef}
        onClick={onVideoPress}
    
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
