import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css';

import Layout from './components/Layout';

import locations from './data/locations';

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;

function App() {
  const mapRef = useRef();

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require( 'leaflet/dist/images/marker-icon-2x.png' ),
      iconUrl: require( 'leaflet/dist/images/marker-icon.png' ),
      shadowUrl: require( 'leaflet/dist/images/marker-shadow.png' ),
    });
  }, []);

  useEffect(() => {

    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    map.eachLayer((layer = {}) => {
      const { options } = layer;
      const { name } = options;

      if ( name !== 'Mapbox' ) {
        map.removeLayer(layer);
      };
    });

    /**
     * @lesson-07-todo
     * Using the default options of the Leaflet GeoJSON instance
     * only provides us with markers on our map. Luckily, it
     * includes the ability to pass in a configuration object
     * with options for how we want to set up our locations.
     * What option can we use to add popups to our markers?
     */

    const geoJson = new L.GeoJSON(locations);

    geoJson.addTo(map);
  }, [mapRef]);

  return (
    <Layout>
      <Map ref={mapRef} center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </Map>
    </Layout>
  );
}

export default App;
