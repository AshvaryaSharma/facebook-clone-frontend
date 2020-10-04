import React from 'react';
import {Avatar} from "@material-ui/core"
import PostMediaButton from './PostMediaButton';
import VideoCallIcon from '@material-ui/icons//VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
function Post() {
    return (
        <div className="post__container">
            <div className="post__input">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />
                <input type="text" placeholder="What's in your mind, Ashvarya?"/>
            </div>
            <div className="post__media">
                <PostMediaButton  colorIcon="red" Icon={<VideoCallIcon />}>
                    
                    <p>Live Video</p>
                </PostMediaButton>
                <PostMediaButton  colorIcon="green" Icon={ <PhotoLibraryIcon />}>
                   
                    <p>Photo/Video</p>
                </PostMediaButton>
                <PostMediaButton  colorIcon="yellow" Icon={<MoodIcon />}>
                    
                    <p>Feeling/Activity</p>
                </PostMediaButton>
            </div>
        </div>
    )
}

export default Post;
