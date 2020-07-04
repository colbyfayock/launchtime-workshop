import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/stylesheets/App.css';

import Layout from './components/Layout';

import locations from './data/locations';
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

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    /**
     * @lesson-10-answer Exercise 3
     * Adding the event handler for locationfound allows
     * us to trigger custom functionality when that
     * event occurs.
     */

    map.on('locationfound', handleOnLocationFound);

    return () => {

      /**
       * @lesson-10-answer Extra Credit
       * When setting an event handler, we also want to
       * make sure we turn it off when the component unmounts
       * by returning an off command as a return statement.
       * React Hooks will run this function once the component
       * "cleans up".
       */

      map.off('locationfound', handleOnLocationFound);

    }
  }, [mapRef]);

  function handleOnLocationFound(event) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const latlng = event.latlng;

    const marker = L.marker(latlng);

    marker.addTo(map);

    /**
     * @lesson-10-answer Exercise 4
     * Using the same latitude and longitude, we can create
     * a Circle shape and add it to the map just like our
     * Marker instance. To determine how wide it is, we can
     * use our event location's accuracy property which is
     * the readius in meters
     */

    const radius = event.accuracy;

    const circle = L.circle(latlng, {
      radius,
      color: '#26c6da'
    });

    circle.addTo(map);
  }

  function handleOnFindLocation() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.locate({
      setView: true,
    });
  }

  function handleOnSetLocation() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const locationNationalGeographic = [38.905630, -77.037000];

    /**
     * @lesson-10-answer Exercise 1
     * When our button is clicked, we can define a
     * specific location, create a marker for that
     * location, and add it to our map. We can also
     * set our map's current view to that location.
     */

    const marker = L.marker(locationNationalGeographic);

    marker.addTo(map);
    map.setView(locationNationalGeographic);
  }

  return (
    <Layout>
      <div className="search-actions">
        <ul>
          <li>
            <button onClick={handleOnSetLocation}>
              Set Location to National Geographic Museum
            </button>
          </li>
          { /**
             * @lesson-10-answer Exercise 2
             * We have a few options for finding someone's location
             * but Leaflet gives us native options that use the browser
             * to find that location. Using a button, we can set an event
             * handler that lets us look for that location on click.
             */ }
          <li>
            <button onClick={handleOnFindLocation}>
              Find My Location
            </button>
          </li>
        </ul>
      </div>
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
