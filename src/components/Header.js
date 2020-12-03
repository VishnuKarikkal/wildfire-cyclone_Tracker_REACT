import React from 'react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import alertDecagram from '@iconify/icons-mdi/alert-decagram';
import Icon from '@iconify/react';

function Header({ event }) {
    return (
        <header>
            <h1>
            {   event === 'wildfire' ? 
                <Icon icon={locationIcon} className="location-icon" /> 
                : 
                <Icon icon={alertDecagram} className="location-icon storm" />
            } &nbsp;
            <span className="title">{event === 'wildfire'?"Wildfire":"Cyclone"}</span>
                &nbsp;Tracker Powered By NASA
            </h1>
        </header>
    )
}

export default Header
