import React from 'react';
import RippleButton from 'material-ripple-button';
const ImageLinkForm = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl  bg-gradient-to-r from-amber-500 to-pink-500 font-bold text-transparent bg-clip-text mb-10 text-center  md:text-left animate-fade-right lg:max-w-[800px] ">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div id="form" className="flex items-center p-6 rounded-md">
        <input
          type="text"
          className="h-10 px-4 rounded-l-md shadow-md"
          placeholder="Enter Image URL"
        />
        <RippleButton>
          <button className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] h-10 px-4 rounded-none rounded-r-md text-white font-semibold shadow-md ">
            Detect
          </button>
        </RippleButton>
      </div>
    </div>
  );
};
export default ImageLinkForm;
