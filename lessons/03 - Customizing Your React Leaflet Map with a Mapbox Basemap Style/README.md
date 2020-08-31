# 📓 Lesson 03: Customizing Your React Leaflet Map with a Mapbox Basemap Style

Not all maps are the same and neither is the data that goes on top! Sometimes it's easier to visualize data on top of a map that shows a really simple vector illustration of the different regions, but sometimes showing actual satellite imagery can help someone understand what the data actually means.

We're going to learn how to customize our map so we can prepare it to add our data on top.

## Objectives
* Create a new Mapbox account
* Create a new Map Style in Mapbox
* Create an API Key
* Configure TileLayer Endpoint
* Use Map Style for Search page basemap

## Exercise

🕵️‍♂️ Use the `@lesson-03-todo` key to search for this lesson's assignments in the code!

### 1. Creating a Mapbox Account

To get started with customizing our map, we'll need a Mapbox account.

Mapbox is a suite of mapping tools that provides services from creating a custom Map Style (like what we're doing) all the way to various APIs like looking up the coordinates of a location by an address.

It's easy to create an account and they provide a generous free tier, so it makes a good option for us to get started!

#### Resources
* [Mapbox](https://www.mapbox.com/)

### 2. Creating a Map Style in Mapbox

Now that we have our Mapbox account, we can get started by creating a new Map Style.

All maps basemap layer that provides the underlying imagery that we can display our data on top of. If you're looking at Google Maps, this likely looks like a vector drawing of all of the roads and features. Alternatively, you can use satellite imagery that allows you to see what the actual locations look like.

For this part of the exercise, we'll be using Mapbox's Monochrone Map Style to give our map a nice clean look.

#### Resources
* [Mapbox Studio](https://studio.mapbox.com/)

### 3. Creating an API Key

As we know, Mapbox is a suite of tools that provide a bunch of services. But those services can't be free forever or else they'ed be out of business! That's where an API Key comes in.

When using a basemap from Mapbox, an API Key is a way for Mapbox to know the request to their servers is authenticated and valid. Additionally, it gives them a way to track how much that key's being used.

Mapbox gives you a default key, which is okay to use, but we're going to create a new key that we can use specifically for our project.

#### Resources
* [Mapbox Account](https://account.mapbox.com/)

### 4. Create an Environment Variable for the API Key

While our API key is exposed when our page loads the map, we can configure our API keys to have 1 for development that no one can ever see and one for production where we would restrict the URL to our app.

To do this, we can use Create React Apps's built-in environment variable solution. You should be able to find an `.env.shared.sample` file that you can duplicate and remove `sample` from the name. You can then use this to fill in your details for the variables.

#### Where We'll Make Changes
* `lessons/.env.shared`
* `/src/App.js`

### 5. Configuring a Mapbox Endpoint for our Map Style

We've set up the two most important parts of our Map Style, now we need to configure the URL that will allow us to use that Style!

Using our API Key, user ID, and Map Style ID, we'll create a tile endpoint that we can use to configure our map.

#### Resources
* [Mapbox Docs](https://docs.mapbox.com/api/maps/#static-tiles)

### 6. Customizing Our Map with Our Map Style Endpoint

Now that we have the last piece to our puzzle, our tile endpoint, we can configure out map to use it!

We'll update our Map compopnent that we set up in the previous lesson to use our new Map Style.

#### Where We'll Make Changes
* `lessons/.env.shared`

#### Resources
* [React Leaflet TileLayer (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#tilelayer)

## Extra Credit

### 1. Extra Env Vars

Similar to [exercise 4](lessons/03%20-%20Customizing%20Your%20React%20Leaflet%20Map%20with%20a%20Mapbox%20Basemap%20Style#4-create-an-environment-variable-for-the-api-key), we can pull out other sensitive account data out of our code and into environment variables.

Put your User ID and Style ID into env variables and call them within your application.

Where We'll Make Changes
 - `lessons/env.shared`
 - `/src/App.js`

### 2. Create a New Basemap Style

Here's where you can go nuts!

Your first extra credit assignment is to go back to Mapbox and create a new Map Style. Now that you're on your own, you can choose any basemap you want, whether it's a vector map or one with satellite imagery. Feel free to customize and use any color you'd like!

Once you create your new style, you can update your Search page basemap TileLayer to use that new style.

#### Where We'll Make Changes
* `/src/App.js`

#### Resources
* [Mapbox Studio](https://studio.mapbox.com/)
