import { IconButton } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import { logout, selectUser } from './features/userSlice';
import db from './firebase';
import Message from './Message';
import {useSelector} from 'react-redux';
import { selectChatId, selectChatName } from './features/chatSlice';
import firebase from 'firebase';    


function Chat() {


    const [input, setInput] = useState('');

    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const user = useSelector(selectUser);
    
    const [messages, setMessages] = useState([]);
   
    useEffect(()=>{

        if(chatId){

           

        db.collection("chats").doc(chatId).collection("messages"). 
        orderBy('timestamp','desc').onSnapshot(snapshot => {
        
        setMessages(snapshot.docs.map(doc=>({

          id:doc.id,
          data:doc.data()
            

          })) );

        })

    }

    }, [chatId]);
    



    const sendMessage = (e) =>{

        e.preventDefault();

        db.collection('chats').doc(chatId).collection('messages').add({

            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo:user.photo,
            email:user.email,
            displayName: user.displayName

        });

            setInput('');
    };

    


    return (
        <div className="chat">

            <div className="chat_header">  


    <h4> <small>To:</small> <span className="chat_name">{chatName}</span> </h4>
                <strong>Details</strong>
             </div>

             <div className="chat_messages"> 

   
             
             {
                messages.map(({id, data})=>(

                    < Message key={id} contents={data} />

                )) 


             }
            
             

        

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
