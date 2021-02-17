import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">E-Commerce</Link>
      </h1>
      <div className="Header-checkout"></div>
      <Link to="/checkout">
        <i className="fas fa-shopping-basket"></i>
      </Link>
    </div>
  );
};

export default Header;
