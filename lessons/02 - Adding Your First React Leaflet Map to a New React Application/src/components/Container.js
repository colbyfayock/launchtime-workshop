import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, type }) => {
  let containerClass = 'container';

  if ( type ) containerClass = `${containerClass} container-${type}`;
  if ( className ) containerClass = `${containerClass} ${className}`;

  return (
    <div className={containerClass}>
      { children }
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string
};

export default Container;