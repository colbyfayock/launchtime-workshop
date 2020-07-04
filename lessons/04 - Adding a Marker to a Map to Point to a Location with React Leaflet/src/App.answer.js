/**
 * @lesson-04-answer
 * In order to make use of the Marker and Popup components,
 * we need to import them from react-leaflet. Additionally,
 * to fix the issue between Leaflet and React Leaflet, we
 * have to import Leaflet to override the default icons as
 * well as useEffect from React to apply the fix after render.
 */

import React, { useEffect } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css';

import Layout from './components/Layout';

const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.REACT_APP_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.REACT_APP_MAPBOX_STYLEID;

function App() {
  /**
   * @lesson-04-answer
   * When working between Leaflet and React Leaflet, some
   * collisions occur which we need to iron out by adding
   * a fix correct the location of our Marker images
   * See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
   */

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
      <Map center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
        { /**
           * @lesson-04-answer
           * Using the Marker and Popup component, we can both
           * add a new Marker to the location we choose to show
           * a specific location and attach a Popup to that Marker
           * so we can add some context to the Marker.
           */ }
        <Marker position={[38.888369, -77.019900]}>
          <Popup>Smithsonian National Air and Space Museum</Popup>
        </Marker>
      </Map>
    </Layout>
  );
}

export default App;
