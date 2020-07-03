import React from 'react';
import './assets/stylesheets/App.css';

/**
 * @lesson-02-todo Exercise 2
 * In order to build our map, we need to import out components.
 * How can we add those to our project?
 */


import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      { /**
       * @lesson-02-todo Exercise 2
       * We want to add our first map to the app. Using the
       * the components we just imported above, how can we
       * configure the props to show our map?
       */ }
      <h1 className="text-center">Welcome to LaunchTime</h1>
    </Layout>
  );
}

export default App;
