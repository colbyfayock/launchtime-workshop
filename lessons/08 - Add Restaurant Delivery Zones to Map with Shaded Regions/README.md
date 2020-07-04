# 📓 Lesson 08: Add Restaurant Delivery Zones to Map with Shaded Regions

There's nothing like finding a restaurant, seeing they deliver, and getting excited about what you're going to order from their menu only to find out you're not in their delivery zone. It's not fun, but we can give our website visitors a better way to search by showing them each restaurant's delivery zone right on the map!

How can we add a data point to our existing restaurant info and use Leaflet shapes to show each restaurant's delivery zone?

## Objectives
* Add a delivery radius to each restaurant that delivers
* Use Leaflet to add a shaded circle to the map showing the delivery radius
* Only show a delivery zone when hovering over a restaurant marker

## Exercise

🕵️‍♂️ Use the `@lesson-08-todo` key to search for this lesson's assignments in the code!

### 1. Adding a delivery radius to our restaurant data

For this step, we're going back to our restaurant locations GeoJSON file. We want to be able to provide a value for how far away from each restaurant they're willing to deliver.

How can we add another data property that we can use dynamically in our map?

#### Where We'll Make Changes
* `src/data/locations.json

### 2. Using the delivery radius to add a shaded circle to the map

Now that we're setting our delivery radius, let's use it! We'll use that value to create a new Circle shape on the map.

How can we use the delivery radius property to create a new Leaflet Circle shape?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet Circle](https://leafletjs.com/reference-1.6.0.html#circle)

### 3. Only showing the delivery radius on marker hover

We were able to show all of our delivery zones, but it's a little overwhelming and it can be hard to determine which zone is associated with which marker.

How can we event handlers on our markers to show and hide the radius on hover?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet Evented](https://leafletjs.com/reference-1.6.0.html#evented)

## Extra Credit

### 1. Change the color of the delivery zone

Just like we changed styles of our markers before, we can change the colors of shapes.

What properties can we use to configure our Circles that show the delivery zone to be a different color?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet Circle Options](https://leafletjs.com/reference-1.6.0.html#circle-option)