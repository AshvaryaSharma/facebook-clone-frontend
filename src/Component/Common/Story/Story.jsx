import React from 'react'

function Story({image, Icon, name,type}) {
    return (
        <div className="story__container">
            {type =="video"? <video src={image} autoplay={true} type="video/mp4" /> : <img src={image} />}
            <div>{Icon}</div>
            <p>{name}</p>
        </div>
    )
}

export default Story;