import React from 'react'
import Story from './Story'
import { Avatar } from '@material-ui/core';
function StoryReel() {
    return (
        <div className="story__reel">
            <Story name="Ashvarya Sharma" 
                    Icon={<Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />}
                    image="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120772477_4365731493497790_626349748450329194_o.jpg?_nc_cat=109&_nc_sid=5b7eaf&_nc_ohc=0v8XWHAfhTYAX9j3p5l&_nc_ht=scontent-dfw5-2.xx&oh=5538653ce2fa1fba68db6c8721971cdb&oe=5F9EF7E7"
                    
            />

             <Story name="Rahul Tewatia" 
                    Icon={<Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu91RYyvx-95NAkDZsU6F3b4f7MrikK7WWmX_amv=s83-c-mo" />}
                    image="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120727448_10164318438125080_482202527059841736_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=PCBT7jHe56gAX8ON3zh&_nc_ht=scontent-dfw5-2.xx&oh=d5515d9e3c5f7ac5e11e04b1516520ee&oe=5F9D9E05"
                    
            />
             <Story name="Manchester United" 
                    Icon={<Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/75462338_10157030107892746_4920929384635826176_n.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=Gk_HmfaRCYIAX8D5vkL&_nc_oc=AQmG0Ggbj5-ysk9wvbAXk5bxq-J3UTPA0j8MpDML5-T4wVaR6HHvZ3qejJOo22-BVsI1a9DdJJ2LaoiytjYMsg8K&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=ea72ea18e887d0349fed106f839e23b1&oe=5FA050A0" />}
                    image="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120630597_10158026331882746_2421923104601047495_o.jpg?_nc_cat=1&_nc_sid=5b7eaf&_nc_ohc=7wypwfUq3qwAX81-gWO&_nc_ht=scontent-dfw5-2.xx&oh=b87504fa6e00bed7ad23605424b0b947&oe=5F9F53CF"
                    
            />
            <Story name="" 
                    Icon={<Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/102392867_10163790533800080_1098291804378786832_o.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=b-doMCunYOsAX_66WrD&_nc_ht=scontent-dfw5-2.xx&oh=ba9c668ac83cade2f7435ccb59d8cc81&oe=5F9E3A8B" />}
                    image="https://scontent-dfw5-1.xx.fbcdn.net/v/t66.36240-6/120545132_1027479581023070_8789134775830075143_n.mp4?_nc_cat=101&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=-kqkZd8apZAAX_eaWBm&_nc_ht=scontent-dfw5-1.xx&oh=8c3a6c58faec4c7854a519f4edb59137&oe=5F9FCF11"
                    type="video"
            />
            <Story name="" 
                    Icon={<Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/82221760_10158275746728377_7538177740810974938_n.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=TVcKSVQmtEwAX9Dwh3H&_nc_ht=scontent-dfw5-2.xx&oh=f704afe2e3702161812f7af0c629c903&oe=5FA03E34" />}
                    image="https://scontent-dfw5-1.xx.fbcdn.net/v/t66.36240-6/46051434_461225991461750_7796206698429358606_n.mp4?_nc_cat=101&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=tNOMr92ech8AX9OPjm5&_nc_ht=scontent-dfw5-1.xx&oh=62718b632e5486c227e8f78017a573e2&oe=5F9EDA47"
                    type="video"
            />
             <Story name="" 
                    Icon={<Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/13076963_10153711951306701_9162879604369564628_n.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=UM6jn0cZb0MAX8D1u9_&_nc_ht=scontent-dfw5-2.xx&tp=6&oh=832a11d8c56210231078a8e4f0835aba&oe=5F9F28D9" />}
                    image="https://scontent-dfw5-2.xx.fbcdn.net/v/t66.36240-6/45289184_332778671356036_6510646787328686612_n.mp4?_nc_cat=104&_nc_sid=985c63&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=m1zyOzwcRDUAX-UdJtV&_nc_ht=scontent-dfw5-2.xx&oh=2993bd357f424277103d23555f3239d8&oe=5F9CC25B"
                    type="video"
            />
            {/* <Story name="" 
                    Icon={<Avatar src="" />}
                    image=""
                    
            />
            <Story name="" 
                    Icon={<Avatar src="" />}
                    image=""
                    
            /> */}
        </div>
    )
}

export default StoryReel;
