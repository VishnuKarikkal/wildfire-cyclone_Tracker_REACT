import React from 'react'

const LocationInfo = ({ info }) => {
    return (
        <div className="location-info">
            <h3>Location Information</h3>
            <ul>
                <li>ID: &nbsp;<strong>{info.id}</strong></li>
                <li>Title: &nbsp;<strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfo
