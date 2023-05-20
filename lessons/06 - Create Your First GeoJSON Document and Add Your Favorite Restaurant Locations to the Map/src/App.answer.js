import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css';

import Layout from './components/Layout';

/**
 * @lesson-06-answer
 * Because we're storing our data locally, we can
 * import it straight from our data folder. This
 * makes it available as a variable for us to use
 * with our map.
 */

import locations from './data/locations.answer';

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;

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

    /**
     * @lesson-06-answer
     * When we imported our locations, it was already
     * formatted as GeoJSON. Because the Leaflet GeoJSON
     * instance takes GeoJSON as an input, we can create
     * a new instance and add it to the map!
     */

    const geoJson = new L.GeoJSON(locations);

    geoJson.addTo(map);
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
