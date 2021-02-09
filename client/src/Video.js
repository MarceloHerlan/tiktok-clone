import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({url,channel,description,song,likes,shares,messages}) => {
    const videoRef=useRef(null)
    const [playing,setPlaying]=useState(false)

    const handleVideoPress=()=>{
        if (playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className='video'>            
            <video 
            onClick={handleVideoPress}
            loop 
            className='video__player'
            ref={videoRef}
             src={url}></video>
             
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video


