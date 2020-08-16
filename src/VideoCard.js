import React from 'react'

import Avatar from '@material-ui/core/Avatar'


import './VideoCard.css'

const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
  return (
    <div className="videoCard">
    <img className="videoCard__thumbnail" src={image} alt="pic" />
    <div className="videoCard__info">
    <Avatar className="videoCard__avatar" 
      alt={channel}
      src={channelImage} />
    </div>

    <div className="video__text">
    <h4>{title}</h4>
    <p>{views} . {timestamp}</p>


    </div>
    
    </div>
  )
}

export default VideoCard
