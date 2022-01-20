import React from 'react'
import Video from './components/Video'
import juice from './juice.mp4'
import us from './us.jpg'
import alone from './alone.mp4'
import vid from './vid.mp4'
import quote from './quote.mkv'
import lotti from './lotti.mp4'
import hard from './problem.mp4'
 
const App = () => {
    return (
        <div className="app bg-gray-900">
        <div className="app-top">
        <h1 className='text-yellow-500 mt-0 font-bold uppercase p-2 text-6xl font-poppins'>Vine <span className='text-red-500'> Lov </span></h1>
        <h1 className='text-white'>Made by Olvine: <a className='text-yellow-500' href="https://www.github.com/Olvine23" value="Github Profile">Link to Github</a></h1>
        </div>
            
        <div className="app-videos lg:w-50">
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
        </div>
          
        </div>
    )
}

export default App;
