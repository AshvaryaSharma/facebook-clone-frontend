import React from 'react'
import SidebarRow from '../Common/SidebarRow';

import { Avatar } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import StoreIcon from '@material-ui/icons/Store';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import TelegramIcon from '@material-ui/icons/Telegram';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow  mainContent="Ashvarya Sharma" 
                // badgeContent="1 new"
                icon={<Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />}/>
        
            <SidebarRow mainContent="Friends"
            badgeContent="1 new request"
            icon={<PeopleAltIcon />} />
             <SidebarRow mainContent="Group"
            
            icon={<GroupAddIcon />} />
             <SidebarRow mainContent="Marketplace"
           
            icon={<StoreIcon />} />
             <SidebarRow mainContent="Watch"
           
            icon={<LiveTvIcon />} />
             <SidebarRow mainContent="Events"
          
            icon={<EventIcon />} />
             <SidebarRow mainContent="Memories"
          
            icon={<ScheduleIcon />} />
            <SidebarRow mainContent="Saved"
          
            icon={<BookmarkIcon />} />
            <SidebarRow mainContent="Pages"
          
            icon={<FlagIcon />} />
            <SidebarRow mainContent="Campus"
          
            icon={<TelegramIcon />} />
        </div>
    )
}

export default Sidebar
