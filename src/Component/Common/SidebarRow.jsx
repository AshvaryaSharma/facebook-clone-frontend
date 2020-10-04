import React from 'react'

function SidebarRow({icon, mainContent, badgeContent}) {
    return (
        <div className="sidebarRow">
            <a href="">
                <div className="sidebarRow__box">
                    {icon}
                    <div className="sidebar__box__content">
                        {mainContent}
                        {badgeContent && <span><i class="fas fa-circle"></i> {badgeContent}</span>}
                    </div>                
                </div>
            </a>
        </div>
    )
}

export default SidebarRow
