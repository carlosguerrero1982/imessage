import { IconButton } from '@material-ui/core';
import React,{useState} from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import Message from './Message';
import {useSelector} from 'react-redux';
import { selectChatName } from './features/chatSlice';

function Chat() {


    const [input, setInput] = useState('');

    const chatName = useSelector(selectChatName);
   

    const sendMessage = (e) =>{

        e.preventDefault();



            setInput('');
    };

    


    return (
        <div className="chat">

            <div className="chat_header">  


    <h4> <small>To:</small> <span className="chat_name">{chatName}</span> </h4>
                <strong>Details</strong>
             </div>

             <div className="chat_messages"> 
             
             < Message />
             < Message />
             < Message />
             < Message />

        

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
