import React from 'react';
import { Avatar } from '@material-ui/core';

function ProfileDisplay({firstname,lastname, displayLastname, imageSrc}) {
    return (
        <div>
            <Avatar src={imageSrc} sizes=""/> {}
        </div>
    )
}

export default ProfileDisplay
