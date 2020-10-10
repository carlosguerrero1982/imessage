import { Avatar,IconButton } from '@material-ui/core';
import React from 'react';
import './sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import { auth } from './firebase';

function Sidebar() {

    

    const user = useSelector(selectUser);


    return (
        <div className="sidebar">
           
            <div className="sidebar_header">

            <Avatar onClick ={()=>auth.signOut()} src={user.photo} className="sidebar_avatar" />
            
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
