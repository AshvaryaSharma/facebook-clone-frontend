import React from 'react';
import SidebarRow from '../Common/SidebarRow';
import { Avatar } from '@material-ui/core';

import ContactModal from '../Common/ContactFeed/ContactModal';
import ContactFeedRow from '../Common/ContactFeed/ContactFeedRow';

function LiveFeed() {
    return (
        <div className="liveFeed">
            <h2>Contacts</h2>
           
             <div className="contactLists">
                <ContactFeedRow 
                        name="Ashvarya Sharma"
                        icon={<Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />}
                    />
             </div>
             <div className="contactLists">
                    <ContactFeedRow 
                        name="Charu Sharma"
                        icon={<Avatar src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p480x480/120065301_3233159726737713_3607976801891354609_o.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_ohc=IXTLVZ12DUIAX-F1OpG&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=d02be4ec19f796a72ca37ba1c718dc3e&oe=5F9D4F8D" />}
                    />
                    
                
             </div>
             <div className="contactLists">
                  <ContactFeedRow 
                        name="Rajasthan Royals"
                        icon={<Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/cp0/p80x80/102392867_10163790533800080_1098291804378786832_o.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=b-doMCunYOsAX_66WrD&_nc_ht=scontent-dfw5-2.xx&oh=a24e826032a42a574de852dc96d9b28e&oe=5FA0237D" />}
                    />
             </div>
        </div>
    )
}

export default LiveFeed
