import React from 'react';
import './VideoFooter.css';
import { Avatar, Button } from '@material-ui/core';

const VideoFooter = ({channel,likes,shares, song, avatarSrc}) => <div className="video-footer">
    <div className="videoFooter-text">
    <Avatar src={avatarSrc} />
    <h3>{channel} . <Button>Follow</Button>
    </h3>

    </div>
    
</div>;

export default VideoFooter;
