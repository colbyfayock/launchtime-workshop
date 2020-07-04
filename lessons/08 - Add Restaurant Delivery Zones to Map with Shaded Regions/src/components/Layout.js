import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pageName }) => {
  let layoutClass = '';

  if ( pageName ) layoutClass = `${layoutClass} page-${pageName}`;

  return (
    <>
      <Helmet bodyAttributes={{ class: layoutClass }}>
        <title>LaunchTime</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{ children }</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
};

export default Layout;