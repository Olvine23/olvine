import React from 'react'
import Video from './components/Video'
import juice from './juice.mp4'
import us from './us.jpg'
import alone from './alone.mp4'
import vid from './vid.mp4'
import quote from './quote.mkv'
import lotti from './lotti.mp4'
import video from './number.mkv'
import hard from './problem.mp4'
import spidy from './spidy.mp4'
import coder from './coder.mp4'
const App = () => {
    return (
        <div className="app bg-gray-900">
         
            
        <div className="app-videos lg:w-50">
        <Video
        channel = "Olvine George"
        avatarSrc={us}
        song= 'Test song'
        url={vid}
        likes={1000}
        shares={500}
        />
        <p>lorem okss</p>
        
        <Video 
        channel="Olvine George"
        avatarSrc={us}
        url={quote}
        likes={1000}
        shares={500}
        song="Juice Wrld - A thing about life" />
        <Video 
        channel="Olvine George"
        avatarSrc={us}
        url={juice}
        likes={1000}
        shares={500}
        song="Juice Wrld - Fast" />
        <Video className="alone" 
        avatarSrc={us}
        likes={10000000}
        shares={50000000}
        channel="Olvine George"
        url={alone}
        song="Juice Wrld - All Alone" />
        <Video className="alone" 
        avatarSrc={us}
        likes={10000000}
        shares={50000000}
        channel="Olvine George"
        url={lotti}
        song="Juice Wrld - I love Ally" />
        <Video className="alone" 
        avatarSrc={us}
        likes={10000000}
        shares={50000000}
        channel="Olvine George"
        url={hard}
        song="Juice Wrld - Problem" />
        <Video className="alone" 
        avatarSrc={us}
        likes={10000000}
        shares={50000000}
        channel="Olvine George"
        url={video}
        song="Tik Tok" />
        <Video className="alone" 
        avatarSrc={us}
        likes={10000000}
        shares={50000000}
        channel="Olvine George"
        url={spidy}
        song="Tik Tok" />
        <Video className="alone" 
        avatarSrc={us}
        likes={10000000}
        shares={50000000}
        channel="Olvine George"
        url={coder}
        song="Tik Tok" />

        </div>
          
        </div>
    )
}

export default App;
