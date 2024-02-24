import React from 'react';
import Logo from '../Logo/Logo';
const Navigation = () => {
  return (
    <nav className="flex justify-between items-center mb-16">
      <Logo />
      <p className="capitalize text-orange-500 underline hover:text-pink-500 transition-all duration-300  cursor-pointer">
        sing out
      </p>
    </nav>
  );
};
export default Navigation;
