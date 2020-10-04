import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import GamesIcon from '@material-ui/icons/Games';
import AddIcon from '@material-ui/icons/Add';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* <FacebookIcon className="header__facebookIcon" 
                // style={{ fontSize: 40 }}
                /> */}
                <a href="/"><i className="fab fa-facebook"></i></a>
                <div className="search__container">
                    {/* <SearchIcon /> */}
                    <input type="search" placeholder="Search Facebook"></input>
                </div>
            </div>
            <div className="header__center">
                <ul className="nav__center">
                   
                        <a href="/" className="">
                            <li>
                                <HomeIcon />
                            </li> 
                        </a>
                       
                   
                    
                        <a href="#"><li>
                            <TvIcon />
                            </li></a>
                  
                    
                       <a href="#"> <li>
                           <StorefrontIcon />
                           </li></a>
                   
                        <a href="#"> <li>
                            <GroupIcon />
                            </li></a>
                   
                        <a href="#"> <li>
                            <GamesIcon />
                            </li></a>
                    
                </ul>
            </div>
            <div className="header__right">
                <a href="">
                    <div className="header__profile">
                        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />
                        Ashvarya
                        </div>
                </a>
               <a href=""> <AddIcon /></a>
                <a href=""><SmsIcon /></a>
               <a href=""> <NotificationsActiveIcon /></a>
                <a href="">  <ArrowDropDownIcon /></a>
            </div>
        </div>
    )
}

export default Header
