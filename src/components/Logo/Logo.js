import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
const Logo = () => {
  return (
    <div className="pt-4 animate-jump">
      <Tilt options={{ max: 55 }}>
        <div className="h-32 bg-gradient-to-r from-amber-500 to-pink-500 flex justify-center items-center rounded-md ">
          <img src={brain} alt="logo brain" />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
