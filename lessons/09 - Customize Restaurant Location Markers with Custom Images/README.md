# 📓 Lesson 09: Customize Restaurant Location Markers with Custom Images

In a lot of cases, not every marker is the same. Sometimes we have a restaurant, but other times we might have a museum, so we should be able to visually representent that type of location to make our map easier to use.

We'll learn how to create custom markers by using a new configuration option with our Leaflet GeoJSON instance.

## Objectives
* Recreate markers with our GeoJSON configuration options
* Add a custom image to replace our restaurant markers
* Add the default shadow to our custom restaurant markers

## Exercise

🕵️‍♂️ Use the `@lesson-09-todo` key to search for this lesson's assignments in the code!

### 1. Recreate restaurant markers with GeoJSON configuration option

Before we create a completely custom icon, we need to set up our GeoJSON configuration to allow us to manually create markers in the first place. We'll start by recreating our current markers.

What property lets us provide a custom function to create our own markers?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet GeoJSON pointToLayer (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#geojson-pointtolayer)

### 2. Replace the default location markers with a custom image

Now's the fun part! With our configuration, we can now substitute the default markers with our own custom ones.

For this lesson, I've provided you with a custom image that you can use:
```
src/assets/images/utensils-marker.png
```

How can we replace the default markers with our custom image?

#### Where We'll Make Changes
* `src/App.js`

#### Resources
* [Leaflet Marker (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#marker)
* [Leaflet Icon (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#icon)

### 3. Add the default shadows back to our markers

As we just noticed, we don't get the shadows to our markers by default. While we can add a custom one, we can use the default shadows which will work just as well with our custom markers.

How can we use the original shadows and configure them to our markers?

#### Where We'll Make Changes
* `src/App.js`

### Resources
* [Leaflet Icon (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#icon)

## Extra Credit

### 1. Replace the marker with custom HTML and style with CSS

Not only can we use the Leaflet Icon instance to add a custom image, we can create completely custom HTML! This opens the door to a lot of possibilities that you can't do with only an image like using CSS to add effects.

For this extra credit, use a different Leaflet icon type called DivIcon to transform our markers into custom HTML, which you can then style with CSS.

#### Where We'll Make Changes
* `src/App.js`
* `/src/assets/stylesheets/App.css`

#### Resources
* [Leaflet DivIcon (leafletjs.com)](https://leafletjs.com/reference-1.6.0.html#divicon)