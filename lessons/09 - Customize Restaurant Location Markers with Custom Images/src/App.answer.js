import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css';

import Layout from './components/Layout';

import locations from './data/locations';

/**
 * @lesson-09-answer
 * We can import images just like any other file because our application
 * is set up to handle them. We additionally can import an already existing
 * marker image from Leaflet itself
 */

import utensilsIcon from './assets/shared/utensils-marker.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

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

    const geoJson = new L.GeoJSON(locations, {
      /**
       * @lesson-09-answer
       * While we can get away with the default marker in most cases, sometimes
       * having a visual indicator of what a marker means is important to
       * differentiate it to other locations. We're able to replace our marker
       * with a utensils icon so our visitors know it's a restaurant.
       */

      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
          icon: new L.Icon({
            iconUrl: utensilsIcon,
            iconSize: [26, 26],
            popupAnchor: [0, -15],
            shadowUrl: markerShadow,
            shadowAnchor: [13, 28],
          })
        });
      },

      onEachFeature: (feature = {}, layer) => {
        const { properties = {}, geometry = {}  } = feature;
        const { name, delivery, deliveryRadius, tags, phone, website } = properties;
        const { coordinates } = geometry;

        let deliveryZoneCircle;

        if ( deliveryRadius ) {
          deliveryZoneCircle = L.circle(coordinates.reverse(), {
            radius: deliveryRadius
          });
        }

        const popup = L.popup();

        const html = `
          <div class="restaurant-popup">
            <h3>${name}</h3>
            <ul>
              <li>
                ${tags.join(', ')}
              </li>
              <li>
                <strong>Delivery:</strong> ${delivery ? 'Yes' : 'No'}
              </li>
              <li>
                <strong>Phone:</strong> ${phone}
              </li>
              <li>
                <strong>Website:</strong> <a href="${website}">${website}</a>
              </li>
            </ul>
          </div>
        `;

        popup.setContent(html)

        layer.bindPopup(popup);

        layer.on('mouseover', () => {
          if ( deliveryZoneCircle ) {
            deliveryZoneCircle.addTo(map);
          }
        });

        layer.on('mouseout', () => {
          if ( deliveryZoneCircle ) {
            deliveryZoneCircle.removeFrom(map);
          }
        });
      }
    });

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
