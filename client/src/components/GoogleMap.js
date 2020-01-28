//google-maps-react
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class GoogleMap extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 45.51223,
            lng: -122.658722
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVntwMoLf6jpsJjelWgNBRGw90oFTqy2Q'
})(GoogleMap);
