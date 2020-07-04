# 📓 Lesson 02: Adding Your First React Leaflet Map to a New React Application

We just learned about how maps can have huge impacts on people's lives. Inspiring? I sure think so!

Now that we're ready, we're going to get started by installing our dependencies and actually add a map to our page. That way, all of our hungry customers can easily search the map for their favorite locations.

## Objectives
* Install any needed dependencies for our map
* Add a new Leaflet Map component to the Search page
* Configure a TileLayer for a Map with OpenStreetMap
* Make the map take up all of the space on the Search page

## Exercise

🕵️‍♂️ Use the `@lesson-02-todo` key to search for this lesson's assignments in the code!

### 1. Installing Our Dependencies

While there are a few options for building maps, [Leaflet](https://leafletjs.com/) is the most popular. Lucky for us, Leaflet is also available as a ReactJS component library with [React Leaflet](https://react-leaflet.js.org/). We'll use both Leaflet and React Leaflet to build a map in our React app.

To get started, we need to install:
* [Leaflet (npmjs.com)](https://www.npmjs.com/package/leaflet)
* [React Leaflet (npmjs.com)](https://www.npmjs.com/package/react-leaflet)

#### Where We'll Make Changes
* Use your package manager like yarn or npm to add the dependencies

#### Resources
* [Leaflet (leafletjs.com)](https://leafletjs.com/)
* [React Leaflet (react-leaflet.js.org)](https://react-leaflet.js.org/)

### 2. Adding a new map to the page

The first thing we need to do is actually add our map. We already installed our dependencies, so now it's a matter of using them to import our components.

There are 2 primary components that we'll need to use:
* Map
* TileLayer

We'll import these components from React Leaflet and use them to create our map.

#### Where We'll Make Changes
* `/src/App.js`
* `/src/assets/stylesheets/App.css`

#### Resources
* [React Leaflet Map (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#map)
* [React Leaflet TileLayer (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#tilelayer)

## Extra Credit

With our map rendered, we'll notice that there's a white border around the edge of our map. We want our custoemrs to be able to see a fullscreen look at the locations we have available, so we'll want to figure out a way to remove the extra space around our map.

#### Where We'll Make Changes
* `/src/assets/stylesheets/App.css`
