import React from 'react'
import StoryReel from '../Common/Story/StoryReel'
import Post from '../Common/Post/Post'
import PostedContent from '../Common/Post/PostedContent'

function MainSection() {
    return (
        <div className="main__content">
            <StoryReel />
            <Post />
            <PostedContent name="Ashvarya Sharma" time="9hr"
                content="My name is Anthony Gonsalves... Really!!! ... Main Duniya mein akela Hun...."
                mediaPresent={true}
                src="https://scontent-dfw5-2.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/120175562_23845986039780197_2132238533371472677_n.png.jpg?_nc_cat=1&_nc_sid=67cdda&_nc_ohc=2v3mx4twVPgAX8uwshe&_nc_ht=scontent-dfw5-2.xx&oh=6828158d1d0ee1d848520abacd554795&oe=5F9CCA28"
                mediaType="image"
                like= {[21, true]}
                comment= {[125, true]}
                share={[188, true]}
            />
        </div>
    )
}

export default MainSection
