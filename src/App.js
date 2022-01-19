import React from 'react'
import gram from "./gram.png"
import Video from './components/Video'

const App = () => {
    return (
        <div className="app">
        <h2>Hello</h2>
        <div className="app-top">
        <img className="app-logo" src={gram}></img>
        <h1>Ollygram</h1>
        </div>
            
        <div className="app-videos">
        <Video />
        <Video />
        <Video />
         

        </div>
        </div>
    )
}

export default App;
