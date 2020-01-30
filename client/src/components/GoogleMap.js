//google-maps-react
import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class GoogleMap extends React.Component {
         constructor(props) {
           super(props);

           this.state = {
             stores: [
               { lat: 45.536428, lng: -122.688748 },
               { lat: 45.537585, lng: -122.69275 },
               { lat: 45.532801, lng: -122.694539 }
             ]
           };
         }

         displayMarkers = () => {
           return this.state.stores.map((store, index) => {
             return (
               <Marker
                 key={index}
                 id={index}
                 position={{
                   lat: store.lat,
                   lng: store.lng
                 }}
                 onClick={() => console.log('You clicked me!')}
               />
             );
           });
         };
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
               >
                 {this.displayMarkers()}
               </Map>
             </div>
           );
         }
       }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVntwMoLf6jpsJjelWgNBRGw90oFTqy2Q'
})(GoogleMap);
