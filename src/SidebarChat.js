import { Avatar } from '@material-ui/core'
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarchat">

            < Avatar />
            
            <div className="sidebarchat_info">

                <h3>Channel Name</h3>
                <p>Last message...</p>
                <small>timestamp</small>

           </div>     
            
        </div>
    )
}

export default SidebarChat
