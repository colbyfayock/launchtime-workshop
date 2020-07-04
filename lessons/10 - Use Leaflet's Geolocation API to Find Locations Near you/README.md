# 📓 Lesson 10: Use Leaflet's Geolocation API to Find Locations Near you


## Objectives
* Add a marker to the map on button click to designate a location
* Create a button that finds finds and navigates to your location
* Add a marker to the map showing your location
* Add a radius to the map showing the accuracy of your location

## Exercise

🕵️‍♂️ Use the `@lesson-10-todo` key to search for this lesson's assignments in the code!

### 1. Add a marker to a location when clicking a button

Most of us are able to identify where we're located on the map, but it can be hard to visualize that in context to other locations. To help, we can add a marker to the map to show our location.

To get started, we'll add a marker to a specific location to see how it relates to the restaurants that are on our map.

How can we use click events and the Leaflet API to add a marker to the map on click?

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [Leaflet Marker](https://leafletjs.com/reference-1.6.0.html#marker)
* [React Synthetic Mouse Events](https://reactjs.org/docs/events.html#mouse-events)

### 2. Create a button that finds your location and navigates the map to that location

Rather than setting a location manually, web browsers provide a way that we can request access to someone's location. This lets us personalize features and particularly in our use case, find where the person is on the map to see what's close to them.

How can we use Leaflet's geolocation features to find where someone's located?

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [Leaflet Map Geolocation Methods](https://leafletjs.com/reference-1.6.0.html#map-geolocation-methods)

### 3. Use the browser's location to add a marker to the map

While we were able to find our location, Leaflet's geolocation features don't set a marker by default. What they do provide is event handlers that allow us to know when the location is found.

How can we use Leaflet's geolocation event handlers to add a marker to the map?

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [Leaflet Map Location Events](https://leafletjs.com/reference-1.6.0.html#map-location-events)
* [Leaflet Marker](https://leafletjs.com/reference-1.6.0.html#marker)

### 4. Add a circle to the map designating the accuracy of the browser's location

Now that we can pinpoint our location, we noticed that it's not exactly the most accurate indication of where we're at. To help, Leaflet provides an accuracy indicator in meters that we can use to show on the map the margin of error for that location.

How can we use the accuracy property to show the region where a browser is located?

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [Leaflet Map Location Events](https://leafletjs.com/reference-1.6.0.html#map-location-events)
* [Leaflet Circle](https://leafletjs.com/reference-1.6.0.html#circle)

## Extra Credit

### 1. Clean up location event handler resources when page unmounts


#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Cleaning up an effect (reactjs.org)](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect)