import React from 'react';
import {Avatar} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';


function PostedContent(props) {
    return (
        <div className="postedContent__container">
            <div className="postedContent__header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />
                <div className="postHeader__content">
                    <div className="postHeader__content__name">
                        {props.name}
                    </div>
                    <div className="postHeader__content__time">
                        {props.time}
                    </div>
                </div>
            </div>
            <div className="postedContent__mainContent">
                <p>{props.content}</p>
                <div className="postedContent__mainContent__media">
                    {
                        props.mediaPresent && ((props.mediaType ==="video")?<video src={props.src} />: <img src={props.src} /> )
                    }
                </div>
                <div className="postedContent__mainContent__numbers">
                    <div className="postedContent__mainContent__likeNumbers">
                       <ThumbUpIcon style={{color: "royalblue"}}/>
                       <FavoriteIcon style={{color:"red"}}/>
                       <InsertEmoticonIcon style={{color: "wheat"}} />
                       <p> {props.like[0]}</p>
                    </div>
                    <div className="postedContent__mainContent__commentsNumbers">
                        <p>{props.comment[0]} Comments</p>
                        <p>{props.share[0]} Shares</p>
                    </div>
                </div>
            </div>
            <div className="postedContent__actions">
                {
                    props.like[1] && <div>
                                        <ThumbUpIcon /> <p>Like</p>
                                    </div>
                }
                 {
                    props.comment[1] && <div>
                                        <ChatBubbleOutlineIcon /> <p>Comment</p>
                                    </div>
                }
                {
                    props.comment[1] && <div>
                                        <ShareIcon /> <p>Share</p>
                                    </div>
                }
            </div>
            <div className="postedContent__post">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />
               <input type="text" placeholder="Write a comment ..."/>
            </div>
        </div>
    )
}

export default PostedContent;