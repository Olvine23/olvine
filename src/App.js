import React from 'react'
import Video from './components/Video'
import juice from './juice.mp4'
import us from './us.jpg'
import alone from './alone.mp4'
import vid from './vid.mp4'
import quote from './quote.mkv'
import olly from './mine.png'
 
const App = () => {
    return (
        <div className="app">
        <div className="app-top">
        <img className="app-logo" alt="gram" src={olly}></img>
        <h1>VinTok</h1>
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
        
        <Video 
        channel="Olvine George"
        avatarSrc={us}
        url={quote}
        song="Juice Wrld - A thing about life" />
        <Video 
        channel="Olvine George"
        avatarSrc={us}
        url={juice}
        song="Juice Wrld - Fast" />
        <Video className="alone" 
        avatarSrc={us}
        channel="Olvine George"
        url={alone}
        song="Juice Wrld - All Alone" />
        </div>
          
        </div>
    )
}

export default App;
