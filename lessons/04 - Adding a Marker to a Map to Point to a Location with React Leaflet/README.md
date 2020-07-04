# 📓 Lesson 04: Adding a Marker to a Map to Point to a Location with React Leaflet

Maps with imagery alone can be fun to look at, but what makes them useful is when we add location data. While you can use any shape or format, markers are a really common way to designate a specific location.

We're going to walk through using React Leaflet to add a map marker to our favorite location and applying a conflict that prevents our marker from showing when using Leaflet with React Leaflet.

## Objectives
* Find a location to point to on our map
* Create a map marker to identify that location
* Fix a library conflict that prevents the marker from showing
* Add a tooltip popup to display the name of the location

## Exercise

🕵️‍♂️ Use the `@lesson-04-todo` key to search for this lesson's assignments in the code!

### 1. Find our favorite location

Before we can add a marker to our map, we need a location! Our first step is going to be walking through how we can get the latitude and longitude of our favorite spot in Washington, D.C. so that we can add it to our map.

#### Resources
* [Google Maps](https://maps.google.com)

### 2. Add a Marker component with our location

Now that we have our location, we can add a marker to point that location out. To do this, we can use the React Leaflet Marker component which we'll import and add as a component to our page.

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [React Leaflet Marker (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#marker)

### 3. Fix a library conflict so our Marker image shows

Once we added the Marker, the first thing we noticed is it didn't work! 😱

We can fix this though by overriding the library's default images with images imported straight from the library itself. It sound confusing, but we'll walk through this together and see it not working on the page.

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [React Leaflet Github Issue (github.com)](https://github.com/PaulLeCam/react-leaflet/issues/453)

### 4. Add a Popup component to display the name of our location

We now have a marker that shows our location, so let's add a name to it so anyone visiting our map can know what the location is.

We'll be using the React Leaflet Popup component to attach this tooltip popup to our existing Marker component.

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [React Leaflet Popup (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#popup)

## Extra Credit

### 1. Add another marker for your 2nd favorite location

We walked through adding a marker to our map, but more often than not, we have more than 1 favorite location!

Take this opportunity to add another marker that points to another location on the map. Customize a tooltip popup to provide information about that location.

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [React Leaflet Marker (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#marker)
* [React Leaflet Popup (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#popup)