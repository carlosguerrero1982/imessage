import { Avatar,IconButton } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
           
            <div className="sidebar_header">

            <Avatar className="sidebar_avatar" />
            
            <div className="sidebar_input">
            
                 < SearchIcon />

                <input type="text" placeholder="Search" />
            
             </div>

            <IconButton variant ="outlined" className="inputButton">
             <RateReviewOutlinedIcon />
             </IconButton>

            </div>

            <div className="sidebar_chats">

            <SidebarChat />
            <SidebarChat />
            <SidebarChat />

            </div>
            
        </div>
    );
}

export default Sidebar
