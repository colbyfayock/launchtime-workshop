# 📓 Lesson 07: Add Restaurant Info to Your GeoJSON Document and Display It in a Tooltip on the Map

Now that we have successfully added our restaurants to our map, we want to be able to display some information about each of our restaurants. That way, when our visitors know whether or not the restaurant will be open or so they can have a better idea of what kind of food they provide!

We'll extend the GeoJSON we've already worked on adding new properties to store our restaurant location information and provide that information in a tooltip on our existing markers.

## Objectives
* Add restaurant information to our location data
* Configure our restaurant GeoJSON instance to create popups for each location
* Add our restaurant information to the popups
* Style our restaurant information to make it easier to read

## Exercise

🕵️‍♂️ Use the `@lesson-07-todo` key to search for this lesson's assignments in the code!

### 1. Updating our GeoJSON data to include restaurant information

Having a map with a bunch of markers showing locations is cool, but it's not really helpful if we don't know anything about those locations. First, we need to be able to access that data.

How can we provide additional information about our restaurants for our map to use?

#### Where We'll Make Changes
* `src/data/locations.json`

#### Resources
* [GeoJSON Spec (geojson.org)](https://geojson.org/)

### 2. Adding popups to all of our markers

With our data, we'll need a way to present it. Luckily, Leaflet's GeoJSON instance provides ways for us to customize our data on the map so that we can visualize it and communicate more effectively.

What Leaflet GeoJSON option can we use to add popups to our map?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet GeoJSON onEachFeature (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#geojson-oneachfeature)

### 3. Adding restaurant information to our popups

Now that we have our popups, we need to actually put some information in them!

How can we add our restaurant info, like whether or not they deliver, to our popups.

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet GeoJSON Popup setContent (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#popup-setcontent)

### 4. Update the styles of our popups

We have our content! But the default styles aren't the greatest. It's a little hard to read and takes a little more room than it should -- but we can fix that!

How can we use CSS to change our popup's appearance?

#### Where We'll Make Changes
* `/src/assets/stylesheets/App.css`

## Extra Credit

### 1. Change the background color of the popup

We were able to tweak the styles to make the text look more readable, but we didn't do much else. This is your chance to go wild - you can update the background color, change the text color, or do something fancy!

#### Where We'll Make Changes
* `/src/assets/stylesheets/App.css`

### 2. Add another restaurant attribute

When looking for restaurants, people like to know if the restaurant serves food to their dietary needs. Maybe they're vegan or lactose intolerant -- either way, we can add another data attribute that allows us to display that information.

Create a new data attribute in our the properties of each location in our GeoJSON file for another category like Dietary Restrictions and set up our popup to include that information!

#### Where We'll Make Changes
* `src/data/locations.json`
* `src/App.js`

#### Resources
* [GeoJSON Spec (geojson.org)](https://geojson.org/)