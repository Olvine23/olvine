import React from 'react'
import Video from './components/Video'
import juice from './juice.mp4'
import us from './us.jpg'
import alone from './alone.mp4'
import vid from './vid.mp4'
import quote from './quote.mkv'
 
 
const App = () => {
    return (
        <div className="app bg-gray-900">
        <div className="app-top">
        <h1 className='text-green-500 mt-0 font-bold uppercase p-5 text-6xl font-poppins'>Vine <span className='text-red-500'> Lov </span></h1>
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
