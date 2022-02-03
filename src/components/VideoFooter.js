import React from 'react';
import './VideoFooter.css';
import { Avatar, Button } from '@material-ui/core';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import FavoriteIcon from '@material-ui/icons/Favorite'
import SendIcon from '@material-ui/icons/Send'
import ModeCommentIcon from '@material-ui/icons/ModeComment'
import {Link} from 'react-router-dom'
const VideoFooter = ({channel,likes,shares, song, avatarSrc}) => <div className="video-footer">
<div className="videoFooter-text">
   <Link to = "/youtube"> <Avatar src={avatarSrc} /> </Link>
    <h3 className='text-white font-bold'>{channel} . <Button>Follow</Button></h3>
    </div>
    <div className="videoFooter-ticker">
        <MusicNoteIcon className="video-footer-icon "/>
        <Ticker mode='smooth'>
            {
              ({index}) =>(
                 <>
                 <h1 className='text-gray-900 bg-white p-2 rounded'>{song}</h1>
                 </>
              )
            }

        </Ticker>
    </div>
    <div className="videoFooter-actions">
        <div className="left">
        <FavoriteIcon fontSize='large' className="text-red-500" />
        <ModeCommentIcon fontSize='large' className="text-white" />
        <SendIcon fontSize='large' className="text-white" />
        
        </div>
        <div className="right">
        <div className="stat">
                <FavoriteIcon fontSize="small" className="text-red-500" /> 
                <p className='mr-5 font-bold rounded text-black'>{likes}</p>
            </div>
            <div className="stat">
                <ModeCommentIcon fontSize='small' className='text-white' />
                <p className='text-black font-bold'>{shares}</p>
            </div>

        </div>
    </div>
    
</div>;

export default VideoFooter;
