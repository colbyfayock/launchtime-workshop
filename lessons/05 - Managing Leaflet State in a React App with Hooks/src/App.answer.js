/**
 * @lesson-05-answer
 * Since we're no longer using the Marker and Popup
 * components directly, we can remove those imports.
 */

import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css';

import Layout from './components/Layout';

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;


/**
 * @lesson-05-answer
 * Using React's useEffect hook, we can access our map
 * inside of a nested component. We cna then recreate our
 * marker and add it to the map with the Leaflet API.
 */

const MapEffect = () => {
  const map = useMap();

  useEffect(() => {
    if ( !map ) return;

    map.eachLayer((layer = {}) => {
      const { options } = layer;
      const { name } = options;

      if ( name !== 'Mapbox' ) {
        map.removeLayer(layer);
      };
    });

    const marker = L.marker([38.888369, -77.019900])

    marker.bindPopup('Smithsonian National Air and Space Museum');
    marker.addTo(map);
  }, [map]);

  return null;
};

function App() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require( 'leaflet/dist/images/marker-icon-2x.png' ),
      iconUrl: require( 'leaflet/dist/images/marker-icon.png' ),
      shadowUrl: require( 'leaflet/dist/images/marker-shadow.png' ),
    });
  }, []);

  return (
    <Layout>
      <MapContainer center={[38.907132, -77.036546]} zoom={12}>
        <MapEffect />
        <MapEffect />
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </MapContainer>
    </Layout>
  );
}

export default App;
