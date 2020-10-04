import React from 'react';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
function ContactModal(props) {
    return (
        <div>
            
            <div className="contactLists__modal">
                    <div className="contactModal__info">
                        <div className="contactModal__profile">
                            {props.icon}
                        </div>
                        <div className="contactModal__profileInfo">
                            <h3>{props.name}</h3>
                            <p><SupervisorAccountIcon /> <span>Mutual Friend</span></p>
                            <p><BusinessCenterIcon /><span>Works At</span></p>
                        </div>
                    </div>
                    <div className="contactModalAction">
                        <div><SmsIcon /><p>Message</p></div>
                        <div>
                            <RecordVoiceOverIcon />
                        </div>
                        <div>
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default ContactModal
