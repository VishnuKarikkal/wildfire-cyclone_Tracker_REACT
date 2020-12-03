import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';

const Map = ({ eventData , event , center , zoom }) => {

const [ locationInfo , setLocationInfo ]  = useState(null) ;

const markers = eventData.map(ev=>
    {
        if(event === 'wildfire')
        {
        if(ev.categories[0].id === 8)
        {
           return <LocationMarker key={ev.id} event={event}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
              onClick={ ()=> setLocationInfo({ id:ev.id , title:ev.title }) }    />
        }
        }
        else
        {
            if(ev.categories[0].id === 10)
            {
                const stormArr= ev.geometries.map(geo=>
                    {
                        return <LocationMarker key={ev.id} event={event}
                        lat={geo.coordinates[1]}
                        lng={geo.coordinates[0]}
                          onClick={ ()=> setLocationInfo({ id:ev.id , title:ev.title }) }    />
                    });
                return stormArr;
            }
        }
        return null;
    });

    return (
        <div className="map">
            <GoogleMapReact 
            bootstrapURLKeys={{key:'AIzaSyCMps8NwHOpGhixKl3B7gsUWWigHK9OyIM'}}
            defaultCenter={center}
            defaultZoom={zoom} 
            >
            {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfo info={locationInfo} />}
        </div>
    )
}

Map.defaultProps=
{
    center:{lat:20.5937, lng:78.9629},
    zoom:6
}

export default Map
