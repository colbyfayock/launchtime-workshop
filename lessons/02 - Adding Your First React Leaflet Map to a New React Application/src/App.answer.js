import React from 'react';
import './assets/stylesheets/App.answer.css';

/**
 * @lesson-02-answer Exercise 2
 * The main components we use for creating a new map
 * with React Leaflet are the MapContainer and TileLayer components.
 * With those imported, we can use them in our page as well
 * as import the Leaflet CSS to make sure our map shows up
 * like a map.
 */
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      { /**
       * @lesson-02-answer Exercise 2
       * After importing our Map and TileLayer components,
       * we set up the position we want our MapContainer to center on
       * as well as our default zoom level. With our map, we
       * can add our TileLayer where we load OpenStreetMap
       * for our basemap.
       */ }
      <MapContainer center={[38.907132, -77.036546]} zoom={12}>
        <MapEffect />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </MapContainer>
    </Layout>
  );
}

export default App;
