# 📓 Lesson 06: Create Your First GeoJSON Document and Add Your Favorite Restaurant Locations to the Map

So far, we've created a new map, and we've even added a marker to a spot around the city. But we can extend this concept and use data standard formats in the geospatial space like GeoJSON that will allow us to have a good way to describe these locations.

Luckily, GeoJSON interfaces directly with Leaflet, so we'll have an easy time adding that data to the map, but how can we actaully create a GeoJSON document with our locations?

## Objectives
* Understand the basic structure of a GeoJSON document
* Use geojson.io to create a GeoJSON document
* Manually add a new location to a GeoJSON document
* Create and import a GeoJSON document into the app
* Add GeoJSON feature locations to the map

## Exercise

🕵️‍♂️ Use the `@lesson-06-todo` key to search for this lesson's assignments in the code!

### 1. Understanding the Basics of GeoJSON

Before we jump straight into creating our new dataset, it will help to get an idea of what it is. We'll first walk through what the GeoJSON standard is and what it's trying to achieve.

#### Resources
* [GeoJSON Spec (geojson.org)](https://geojson.org/)
* [GeoJSON Second Bit (macwright.org)](https://macwright.org/2015/03/23/geojson-second-bite.html)

### 2. Using geojson.io to Create Your First GeoJSON Document

Writing data documents by hand isn't always the best approach, nor the most fun. Luckily we have tools available for us, and [geojson.io](http://geojson.io/) is one for GeoJSON.

How can we use it to create the new location data for our map?

#### Resources
* [geojson.io](http://geojson.io/)

### 3. Manually Add a New Restaurant Location to the GeoJSON Document

While using tools may be easier and more productive, it's always imporatnt to understand the fundamentals and be able to write something by hand. We'll practice by adding a new location to our GeoJSON document by hand!

#### Resources
* [geojson.io](http://geojson.io/)

### 4. Create a New GeoJSON File and Import it into the App

Now that we have our data, we need it somewhere we can use it!

How can we store this data so we can use it for our map?

#### Where We'll Make Changes
* `src/data/locations.json`

#### Resources
* [GeoJSON Spec (geojson.org)](https://geojson.org/)

### 5. Add GeoJSON Location Data to the Map

Success! We've imported our data and we're now ready to use it. Luckily, Leaflet makes this part relatively easy.

So how can we add our GeoJSON data to the map?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet GeoJSON (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#geojson)

## Extra Credit

### 1. Add another location to the map

Time to take off the training wheels -- now it's your turn to manually add a new location to our new GeoJSON document!

#### Where We'll Make Changes
* `src/data/locations.json`

#### Resources
* [GeoJSON Spec (geojson.org)](https://geojson.org/)