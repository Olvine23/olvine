/* eslint-disable no-unused-vars */
import React from 'react'
import YouTubePlayer from 'react-player/youtube'
import tube from '../tube.png'
import './Youtube.css'

const YouTube = () => {
    const links = ['https://www.youtube.com/watch?v=IL357BrwK7c','https://www.youtube.com/watch?v=i-gyZ35074k','https://www.youtube.com/watch?v=IxxstCcJlsc']
    return(
        

        <div className="tube">
            <div className="app-top">
             <img className="app-logo" src={tube} alt="" />
             <h1>YouTube Clips</h1>

            </div>
            <div className="app-videos-tube">
    
                <YouTubePlayer
                className="video-player"
                url= 'https://www.youtube.com/watch?v=IL357BrwK7c' />

            </div>
            
        </div>
    )
}

export default YouTube;