import React from 'react';
import "./TopBar.css";
import {Language, NotificationsNone, Settings} from '@material-ui/icons';
const TopBar = () => {
    return (
       <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
                   <span className="logo">Ahmed_Admin</span>
               </div>
               <div className="topRight">
                   <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                   </div>
                   <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                   </div>
                   <div className="topbarIconContainer">
                        <Settings />
                   </div>
                   <img src="https://images.unsplash.com/photo-1586796676774-c93004ae009f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="img" className="topAvatar" />
               </div>
           </div>
       </div>
    );
};

export default TopBar;