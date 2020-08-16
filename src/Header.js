import React from 'react'
import './Header.css'

import MenuSharpIcon from '@material-ui/icons/Menu';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar'


const Header = () => {
  return (
    <div className="header">

    <div className="header__left">
    <MenuSharpIcon/>
    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" alt="icon" />
    </div>


    <div className="header__input">
    <input type="text" placeholder="Search" />
    <SearchSharpIcon className='header__inputButton'/>

    </div>
    <div className="header__icons">
    
    <VideoCallSharpIcon className="header__icon"/>
    <AppsSharpIcon className="header__icon"/>
    <NotificationsSharpIcon className="header__icon"/>

    <Avatar
    alt="saif"
    src="https://avatars0.githubusercontent.com/u/42433469?s=460&u=58b760bbdb35f64740d2a5a88d96c768a7fbbc42&v=4"
    />
    </div>

    </div>
  )
}

export default Header
