import React from 'react'

import './RecommendedVideos.css'

import VideoCard from './VideoCard'

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">

    <h2>Recommended</h2>

    <div className="recommendedVideos__videos">

    <VideoCard 
    title="Become a Web Developer in 10 Days" 
    views="2.3M Views"
    timestamp="3 days ago"
    channelImage="https://lh3.googleusercontent.com/proxy/wS2ulCLg7gbb6Wv1HvsFDlibm7TMY-sv7hGsFwiTpmSa9wOS7xWX36fhBBHyTDGCuTQ_K4cWRh3ipSYMBaWAu_h-X65YDeHAu7yvntFnciE7iNs_nOL8cA"
    channel="Sonny Sangha"
    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
    />
    <VideoCard 
    title="What is Firebase?" 
    views="211k Views"
    timestamp="3 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJxSW9SqAjU_Q4ZXAXfqmGblSkFkUSOMUAnLvK5_mw=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Hitesh Choudhary"
    image="https://i.ytimg.com/vi/BXHQ5NxU2p8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAz67m5NyyUZGBZoaU2W2d2d20I0Q"
    />
    <VideoCard 
    title="Getting started with Firebase Auth on the Web - Firecasts" 
    views="300k Views"
    timestamp="4 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Firebase"
    image="https://i.ytimg.com/vi/-OKrloDzGpU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnvxd__ZAMSex4KEv5pD63yxhyg"
    />
    <VideoCard 
    title="Async JS Crash Course - Callbacks, Promises, Async " 
    views="561k Views"
    timestamp="2 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Travery Media"
    image="https://i.ytimg.com/vi/PoRJizFvM7s/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBtDFopjGfDeBpVb4ZpQ1u5GjW_oQ"
    />
    <VideoCard 
    title="What's an Event Driven System?" 
    views="104k Views"
    timestamp="2 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Firebase"
    image="https://i.ytimg.com/vi/rJHTK2TfZ1I/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDOSjNg5hgA6fXewh7wF3iDWS4TmA"
    />
    <VideoCard 
    title="Become a Web Developer in 10 Days" 
    views="2.3M Views"
    timestamp="3 days ago"
    channelImage="https://lh3.googleusercontent.com/proxy/wS2ulCLg7gbb6Wv1HvsFDlibm7TMY-sv7hGsFwiTpmSa9wOS7xWX36fhBBHyTDGCuTQ_K4cWRh3ipSYMBaWAu_h-X65YDeHAu7yvntFnciE7iNs_nOL8cA"
    channel="Sonny Sangha"
    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
    />
    <VideoCard 
    title="What is Firebase?" 
    views="211k Views"
    timestamp="3 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJxSW9SqAjU_Q4ZXAXfqmGblSkFkUSOMUAnLvK5_mw=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Hitesh Choudhary"
    image="https://i.ytimg.com/vi/BXHQ5NxU2p8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAz67m5NyyUZGBZoaU2W2d2d20I0Q"
    />
    <VideoCard 
    title="Getting started with Firebase Auth on the Web - Firecasts" 
    views="300k Views"
    timestamp="4 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Firebase"
    image="https://i.ytimg.com/vi/-OKrloDzGpU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBAnvxd__ZAMSex4KEv5pD63yxhyg"
    />
    <VideoCard 
    title="Async JS Crash Course - Callbacks, Promises, Async " 
    views="561k Views"
    timestamp="2 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Travery Media"
    image="https://i.ytimg.com/vi/PoRJizFvM7s/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBtDFopjGfDeBpVb4ZpQ1u5GjW_oQ"
    />
    <VideoCard 
    title="What's an Event Driven System?" 
    views="104k Views"
    timestamp="2 years ago"
    channelImage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s48-c-k-c0xffffffff-no-rj-mo"
    channel="Firebase"
    image="https://i.ytimg.com/vi/rJHTK2TfZ1I/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDOSjNg5hgA6fXewh7wF3iDWS4TmA"
    />
    </div>
      
    </div>
  )
}

export default RecommendedVideos
