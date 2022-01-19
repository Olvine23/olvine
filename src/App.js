import React from 'react'
import gram from "./gram.png"
import Video from './components/Video'
import VideoFooter from './components/VideoFooter'

const App = () => {
    return (
        <div className="app">
        <div className="app-top">
        <img className="app-logo" alt="gram" src={gram}></img>
        <h1>Ollygram</h1>
        </div>
            
        <div className="app-videos">
        <Video />
        <VideoFooter />
        <Video />
        </div>
          
        </div>
    )
}

export default App;
