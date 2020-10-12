import { Avatar } from '@material-ui/core'
import React from 'react';
import { setChat } from './features/chatSlice';
import './SidebarChat.css';
import {useDispatch} from 'react-redux';

function SidebarChat({id,chatName}) {

    const dispatch = useDispatch();


    return (
        <div onClick={()=>{
        
            dispatch(
             
                setChat({
    
                id:id,
                chatName: chatName
    
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
