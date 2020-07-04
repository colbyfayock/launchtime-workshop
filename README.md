# 🗺️ Build a Map with React Leaflet - LaunchTime

In this workshop, you'll learn the basics of mapping with [React Leaflet](https://react-leaflet.js.org/) as we work through creating a new map from scratch in a simple React application. From there, we'll layer in data and location-based features that will allow us to create a map that somebody could use to look up their favorite restaurants!

* [Workshop Overview](#workshop-overview)
* [Who Am I?](#who-am-i)
* [Before the Workshop](#before-the-workshop)
* [During the Workshop](#during-the-workshop)

## 🔍 Workshop Overview
Excited to learn? You should be! Here's some of the stuff we'll learn in this workshop:
* Adding a new map to a React app with React Leaflet
* Customize that map with a Mapbox basemap style
* Learn about and create Geospatial data for restaurant info
* Add restaurants to the map and see if they'll deliver to our location
* Use Leaflet's location API to find our locatoin

## 👨‍🚀 Who Am I?
I'm Colby Fayock! I've been working on mapping projects that put a user interface in front of big challenges that involve a lot of data like the imagery that comes from satellites and tools that help manage team resources for disaster relief. Working through these projects has made me passionate about the cool things we can do with maps to help others whether it's helping someone find their favorite restaurant or giving new tools to scientists around the world.

Beyond the [video lessons I've worked on with Egghead](https://egghead.io/playlists/mapping-with-react-leaflet-e0e0?af=atzgap), I've written [a few](https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet) [tutorials](https://www.colbyfayock.com/2020/03/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet/) and a [little bit of inspiration](https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/) for [getting started with maps](https://www.freecodecamp.org/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/) along with some talks I gave at a few conferences [about mapping and the impact they have on our world](https://www.youtube.com/playlist?list=PLFsfg2xP7cbLuAglQob6zjS4nVbyAfSVV).

You can also find me on Twitter at [@colbyfayock](https://twitter.com/colbyfayock)!

## 🧰 Before the Workshop

There are a few things that you would ideally have done before we jump into the workshop:
* Make sure you're set up with the minimum environment requirements
* Set up the base of the project and installed dependencies
* Confirmed you're able to start the project
* Have [Zoom](https://zoom.us/) installed - this will just help the morning of the workshop to be less stressful!

### Environment Requirements
There are only a few things that are probably considered "strict" requirements for the workshop:
* [node](https://nodejs.org/en/)
* [git](https://git-scm.com/)
* Optional: [yarn](https://yarnpkg.com/) (or npm via node)

I'll be using **yarn** in the workshop but most of these commands should work very similarly with **npm**.

The **operating system** you use shouldn't matter as long as you can run commands with yarn or npm.

If you can run `yarn -v` or `npm -v`, you should be good to go.

### Setting Up the Project
Once you verified you have all of the environment requirements, we can get started by cloning this repository.
* Navigate to the folder you'd like to work in
* Run:
```
git clone https://github.com/colbyfayock/launchtime-workshop
cd launchtime-workshop
```

All of the lessons are contained in their own individual directory within the lessons folder.

For each lesson, you can start from scratch by navigating to that lesson's directory and running:
```
yarn install
# or
npm install
```

This will install all of the required dependencies to get started for the lesson.

### Starting Up the Project
After all of the dependencies are installed for the lesson, you should be good to go!
* Run:
```
yarn develop # or npm run develop
```

This should kick off a new server available at http://localhost:3000 and most likely open that page for you.

If you've successfully started up your development server, you should be ready to go for the workshop!

### What's In This Project?
We'll start off our project with [Create React App](https://create-react-app.dev/) which will help us focus on learning to work with maps. CRA is an easy to use framework that uses [React](https://reactjs.org/) that helps us quickly build a new website or application.

I've also pre-configured some shared assets so that some of our changes can follow with us the entire way through the lessons.

### Installing and Using Zoom
We'll be using [Zoom](https://zoom.us/) for the workshop. This is a great tool that helps give everyone the ability to interact with me as I work through the material with you.

Here are some things that seems to have worked well for past workshops:
* **Keep your video on** - just like being in a physical classroom, having your camera on helps put a face to the person. It'll make your experience better as we're all working through this together!
* **Keep your microphone muted unless you're speaking** - I'll be doing most of the talking as I'm walking everyone through the material so keeping your microphone muted will help everyone hear what I'm saying. That said, I'm looking forward to hearing from you all and feel free to ask a question at any time!

## 🖥 The Workshop

### Lessons Structure

Each lesson is broken out into it's own directory under the lessons folder. Each contain's its own set of dependencies (though most are the same) as well as its own project code that we'll use to work through the exercise.

You'll find a README.md at the top of each lesson. This will give you an overview and instructions for that particular lesson as well as what files you'll need to work through.

As you're working through the lesson, you can use designated keys to find locations in the code where changes should be made. These keys can be used by searching for them in your code editor. The keys available are:
* `@lesson-##-todo`
* `@lesson-##-answer`

For example, if we want to find all of the spots where we should be working for lesson 2, we can use the `@lesson-02-todo` key to find those files and locations.

### Lesson Plan

* 00 - Introduction
* [01 - A Little Overview About Maps](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/01%20-%20A%20Little%20Overview%20About%20Maps)
* [02 - Adding Your First React Leaflet Map to a New React Application](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/02%20-%20Adding%20Your%20First%20React%20Leaflet%20Map%20to%20a%20New%20React%20Application)
* [03 - Customizing Your React Leaflet Map with a Mapbox Basemap Style](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/03%20-%20Customizing%20Your%20React%20Leaflet%20Map%20with%20a%20Mapbox%20Basemap%20Style)
* [04 - Adding a Marker to a Map to Point to a Location with React Leaflet](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/04%20-%20Adding%20a%20Marker%20to%20a%20Map%20to%20Point%20to%20a%20Location%20with%20React%20Leaflet)
* [05 - Managing Leaflet State in a React App with Hooks](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/05%20-%20Managing%20Leaflet%20State%20in%20a%20React%20App%20with%20Hooks)
* [06 - Create Your First GeoJSON Document and Add Your Favorite Restaurant Locations to the Map](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/06%20-%20Create%20Your%20First%20GeoJSON%20Document%20and%20Add%20Your%20Favorite%20Restaurant%20Locations%20to%20the%20Map)
* [07 - Add Restaurant Info to Your GeoJSON Document and Display It in a Tooltip on the Map](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/07%20-%20Add%20Restaurant%20Info%20to%20Your%20GeoJSON%20Document%20and%20Display%20It%20in%20a%20Tooltip%20on%20the%20Map)
* [08 - Add Restaurant Delivery Zones to Map with Shaded Regions](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/08%20-%20Add%20Restaurant%20Delivery%20Zones%20to%20Map%20with%20Shaded%20Regions)
* [09 - Customize Restaurant Location Markers with Custom Images](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/09%20-%20Customize%20Restaurant%20Location%20Markers%20with%20Custom%20Images)
* [10 - Use Leaflet's Geolocation API to Find Locations Near you](https://github.com/colbyfayock/launchtime-workshop/tree/master/lessons/10%20-%20Use%20Leaflet's%20Geolocation%20API%20to%20Find%20Locations%20Near%20you)

## 🎓 After the Workshop

I hope after we have worked through this project together you both feel inspired and empowered to go build your own mapping apps. Maps are a super important tool to helping our best and brightest do awesome things along with some other fun things we can do along the way.

### Feedback
The good, the bad -- I want to know! I would really appreciate you taking any time to hop in this survey and be honest about your experience with the workshop. Please take into consideration both how much you've enjoyed the workshop and how much you felt you've learned.
