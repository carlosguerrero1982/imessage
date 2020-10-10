import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
           
            <div className="sidebar_header">

            <Avatar />
            
            <div className="input">


                < SearchIcon />

                <input type="text" placeholder="Search" />
            
             </div>

             <RateReviewOutlinedIcon />

            </div>

            <div className="sidebar_chat">


            </div>
            
        </div>
    )
}

export default Sidebar
