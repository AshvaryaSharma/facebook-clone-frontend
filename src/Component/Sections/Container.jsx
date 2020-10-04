import React from 'react'
import Sidebar from './Sidebar'
import MainSection from './MainSection'
import LiveFeed from './LiveFeed'

function Container() {
    return (
        <div className="container">
            <Sidebar />
            <MainSection />
            <LiveFeed />
        </div>
    )
}

export default Container
