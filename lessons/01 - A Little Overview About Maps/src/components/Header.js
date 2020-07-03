
import React from 'react';

import Container from './Container';
import Logo from './Logo';

import avatarImage from '../assets/shared/avatar.jpg';

const Header = () => {
  const avatarStyles = {
    backgroundImage: `url(${avatarImage})`
  }
  return (
    <header className="header">
      <Container>
        <p className="header-logo">
          <Logo />
        </p>
        <div className="header-account">
          <p className="header-avatar" style={avatarStyles}>
            <span className="visually-hidden">Colby Fayock</span>
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;