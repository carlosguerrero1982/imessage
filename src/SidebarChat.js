import { Avatar } from '@material-ui/core'
import React,{useState} from 'react';
import { setChat } from './features/chatSlice';
import './SidebarChat.css';
import {useDispatch} from 'react-redux';

function SidebarChat({id,chatName}) {

    const dispatch = useDispatch();

    const [chatInfo, setChatInfo] = useState([]);


    return (
        <div onClick={()=>{
        
            dispatch(
             
                setChat({
    
                chatId: id,
                chatName: chatName,
    
               })
            );
        
       } } className="sidebarchat">

            < Avatar />
            
            <div className="sidebarchat_info">

                <h3>{chatName}</h3>
            
                <p>Last message...</p>
                <small>timestamp</small>

           </div>     
            
        </div>
    )
}

export default SidebarChat
