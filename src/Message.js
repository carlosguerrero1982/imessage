import React from 'react';
import './Message.css';
import {Avatar} from '@material-ui/core';
import {selectUser} from './features/userSlice';
import {useSelector} from 'react-redux';

function Message({id,contents:{timestamp,displayName,email,message,photo,uid}}) {
  
    const user = useSelector(selectUser);
  
    return (
        <div className={`message ${user.email===email && "message_sender" }`}>
            < Avatar src={photo} />
                <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message
