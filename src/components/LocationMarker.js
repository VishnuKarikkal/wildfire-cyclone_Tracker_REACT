import React from 'react';
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import alertDecagram from '@iconify/icons-mdi/alert-decagram';


export const LocationMarker = ({ lat , lng , onClick , event }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            {event === 'wildfire' ? <Icon icon={locationIcon} className="location-icon" /> 
                : <Icon icon={alertDecagram} className="location-icon storm" /> }
        </div>
    )
}

export default LocationMarker;