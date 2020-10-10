import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>

            <div className="sidebar_header">

            <Avatar />
            
            <div className="input">


                < SearchIcon />

                <input type="text" placeholder="Search" />
            
             </div>

            </div>

            <div className="sidebar_chat">


            </div>
            
        </div>
    )
}

export default Sidebar
