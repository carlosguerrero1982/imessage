import { Avatar,IconButton } from '@material-ui/core';
import React,{useEffect,useState} from 'react';
import './sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from './SidebarChat';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import db,{ auth } from './firebase';


function Sidebar() {

    
     const [chats,setChats]  = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        
        db.collection("chats").onSnapshot((snapshot) => 

            
           setChats(
               
            snapshot.docs.map((doc) => ({

                id: doc.id,
                data: doc.data(),
           }))
         )
        

     );

     

    },[]);

    const addChat = () => {

        const chatName = prompt("Enter a chat name");

        if(chatName){

            db.collection("chats").add({
                chatName: chatName,
            });

        }
       
    };

    return (
        <div className="sidebar">
           
            <div className="sidebar_header">

            <Avatar onClick ={()=>auth.signOut()} src={user.photo} className="sidebar_avatar" />
            
            <div className="sidebar_input">
            
                 < SearchIcon />

                <input type="text" placeholder="Search" />
            
             </div>

            <IconButton variant ="outlined" className="inputButton">
             <RateReviewOutlinedIcon onClick={addChat}/>
             </IconButton>

            </div>

            <div className="sidebar_chats">

                {
                    chats.map(({id, data:{chatName}}) =>(

                        <SidebarChat key={id} id={id}  chatName={chatName}/>

                    ))
                 }
                       


                    

          

            </div>
            
        </div>
    );
}

export default Sidebar
