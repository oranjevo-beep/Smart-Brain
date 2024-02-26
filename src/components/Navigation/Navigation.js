import React from 'react';
import Logo from '../Logo/Logo';
const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="flex justify-between items-center mb-8">
      <Logo />
      <p
        onClick={() => onRouteChange('signin')}
        className="capitalize text-orange-500 underline hover:text-pink-500 transition-all duration-300  cursor-pointer"
      >
        sing out
      </p>
    </nav>
  );
};
export default Navigation;
