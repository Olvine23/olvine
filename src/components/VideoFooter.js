import React from 'react';
import './VideoFooter.css';
import { Avatar, Button } from '@material-ui/core';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
const VideoFooter = ({channel,likes,shares, song, avatarSrc}) => <div className="video-footer">
    <div className="videoFooter-text">
    <Avatar src={avatarSrc} />
    <h3>{channel} . <Button>Follow</Button>
    </h3>
    </div>
    <div className="videoFooter-ticker">
        <MusicNoteIcon className="video-footer-icon"/>
        <Ticker mode='smooth'>
            {
              ({index}) =>(
                 <>
                 <h1>{song}</h1>
                 </>
              )
            }

        </Ticker>

    </div>
    
</div>;

export default VideoFooter;
