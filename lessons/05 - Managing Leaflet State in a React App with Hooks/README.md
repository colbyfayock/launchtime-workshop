# 📓 Lesson 05: Managing Leaflet State in a React App with Hooks

React Leaflet is an awesome library that gives us components allowing us to easily add a Leaflet map to our React apps. However, once you start working with complex solutions, you'll come to notice that sometimes managing state between React and a Leaflet map can bite you if you're not careful.

How can we best manage state between all aspects of our map to take advantage of all features of both React and Leaflet?

## Objectives
* Adding a ref to the Map and access it in useEffect
* Use the Map ref to access the Leaflet API
* Demonstrate how mismanaging state can cause issues

## Exercise

🕵️‍♂️ Use the `@lesson-05-todo` key to search for this lesson's assignments in the code!

### 1. Adding a ref to our Map component

In order to access our Map instance, we need to use React's ref functionality. We'll start with React's useRef hook and use it to apply a ref to our map.

#### Where We'll Make Changes
* `/src/App.js`

### 2. Accessing our Leaflet Map instance inside a React useEffect hook

Once we have a ref set up, we gain the ability to access that ref within React's useEffect hook.

With this, we'll access the current value at the time the useEffect hook is ran.

You can test this out by using the `console.log` feature and verifying that when logging inside of `useEffect`, you'll see that your `ref` has a property of `current` with a value.

#### Where We'll Make Changes
* `/src/App.js`

### 3. Use our Leaflet Map instance to re-add our Marker to the map

We now have the power of the Leaflet API to make changes to our Map instance. With this, we can recreate our Marker component by tapping directly into the Leaflet API and creating a new Leaflet Marker instance.

We'll walk through accessing our Map instance from the ref in our useEffect hook and using it to recreate our marker on the map.

#### Where We'll Make Changes
* `/src/App.js`

### 4. Adding markers in a single source to avoid mismanaged state

@todo

So far, we haven't noticed any issues with map state, but that doesn't mean there aren't any issues!

We'll walk through a quick demo to see how mismanging our state between our map and React can come back to bite us and add a technique for cleaning things up to avoid stale map data.

#### Where We'll Make Changes
* `/src/App.js`

## Extra Credit

### 1. Recreate the marker from your 2nd favorite location

In our previous lesson, we added a 2nd location to the map. Let's do this again but by using the Leaflet API within our useEffect hook.

#### Where We'll Make Changes
* `/src/App.js`
