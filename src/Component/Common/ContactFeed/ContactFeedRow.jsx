import React from 'react'
import ContactModal from './ContactModal'
import SidebarRow from '../SidebarRow'

function ContactFeedRow(props) {
    return (
        <div>
             <SidebarRow  mainContent={props.name} 
                // badgeContent="1 new"
                icon={props.icon}/>
            <ContactModal name={props.name}
                icon={props.icon}
            />
        
        </div>
    )
}

export default ContactFeedRow
