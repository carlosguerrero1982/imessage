import { IconButton } from '@material-ui/core';
import React,{useState} from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Chat() {


    const [input, setInput] = useState('');

    const sendMessage = (e) =>{

        e.preventDefault();



            setInput('');
    };

    


    return (
        <div className="chat">

            <div className="chat_header">  


                <h4> <small>To:</small> <span className="chat_name">Channel Names</span> </h4>
                <strong>Details</strong>
             </div>

             <div className="chat_messages">  

                <h2>messages</h2>
                <h2>messages</h2>
                <h2>messages</h2>
                <h2>messages</h2>
                
              

             </div>


             <div className="chat_input">  

            <form >

                <input value={input} 
                onChange={e=>setInput(e.target.value)} 
                placeholder="Send message" 
                type="text" 
                />

                <button onClick={sendMessage}>Send a message</button>

            </form>

            <IconButton>

                <MicNoneIcon className="chat_mic" />

            </IconButton>

             </div>

            
        </div>
    )
}

export default Chat
