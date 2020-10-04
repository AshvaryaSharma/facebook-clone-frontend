import React from 'react'

function PostMediaButton({Icon, colorIcon, children}) {
    return (
        <div className="post__media__box" >
            <div style={{color: colorIcon}}>{Icon}</div>
            {children}
        </div>
    )
}

export default PostMediaButton
