import React from 'react'
import gram from "./gram.png"
import Video from './components/Video'
import juice from './juice.mp4'
import us from './us.jpg'
import vid from './vid.mp4'
const App = () => {
    return (
        <div className="app">
        <div className="app-top">
        <img className="app-logo" alt="gram" src={gram}></img>
        <h1>Ollygram</h1>
        </div>
            
        <div className="app-videos">
        <Video
        channel = "Olvine George"
        avatarSrc={us}
        song= 'Test song'
        url={vid}
        likes={1000}
        shares={500}
        />
        
        <Video url={juice} />
        </div>
          
        </div>
    )
}

export default App;
