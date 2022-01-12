import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const location = {
    lat :19.121779071022516,
    lng:72.82375721547987,
}

function Map() {
    
    console.log(location)
    return (
        <div style={{height: '900px'}}>
            <GoogleMapReact
            bootstrapURLKeys = {{key: 'AIzaSyDoOOyhAS1Qh95f5J6SUC3w6DkJPkfdFSo'}}
            defaultCenter = {location}
            defaultZoon = {11}
            >
                <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
            </GoogleMapReact>
        </div>
    )
}

export default Map