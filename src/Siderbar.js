import React from 'react'

import './Siderbar.css'

import SiderbarRow from './SiderbarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';   
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Siderbar = () => {
  return (
    <div className="sidebar">

      <SiderbarRow selected Icon={HomeIcon} title="Home"/>
      <SiderbarRow Icon={WhatshotIcon} title="Trending"/>
      <SiderbarRow Icon={SubscriptionsIcon} title="Subscription"/>

      <hr />
      <SiderbarRow Icon={LibraryAddIcon} title="Library"/>
      <SiderbarRow Icon={HistoryIcon} title="History"/>
      <SiderbarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SiderbarRow Icon={WatchLaterIcon} title="Watch later"/>
      <SiderbarRow Icon={ThumbUpAltIcon} title="Liked videos"/>
      <SiderbarRow Icon={ExpandMoreIcon} title="Show moree"/>

    </div>
  )
}

export default Siderbar
