import {useState } from  "react";
import MDEditor from '@uiw/react-md-editor'

const Forum =() => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    return(
        <section className = "forum">
            <MDEditor height ={300} value={text} onChange={setText} />
            <button className= "bg-green-700" onClick= {() => {
                setMessages((msgs) => [
                    {
                        body:text,
                        timestamp:new Date().toISOString(),
                    },
                    ...msgs,
                ])
                setText('')
            }}>
            Post
            </button>
             
                 {messages.map((msg) => { 
                     return(
                         <dl>
                             <dt>{msg.timestamp}</dt>
                             <p className="bg-white text-blue-900 font-bold">{msg.body}</ p>
                             <dd>
                                 <MDEditor.Markdown source= {msg.body} />
                             </dd>
                         </dl>
                     )
                 })}
        </ section>
    )
}


export default Forum;