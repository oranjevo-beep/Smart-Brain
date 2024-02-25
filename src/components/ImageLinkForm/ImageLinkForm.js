import React from 'react';
import RippleButton from 'material-ripple-button';
const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl  bg-gradient-to-r from-amber-500 to-pink-500 font-bold text-transparent bg-clip-text mb-10 text-center  md:text-left animate-fade-right lg:max-w-[800px] ">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div id="form" className="flex items-center p-6 rounded-md">
        <input
          type="text"
          className="py-2 px-4 rounded-l-md shadow-md"
          placeholder="Enter Image URL"
          onChange={onInputChange}
        />
        <RippleButton onClick={onBtnSubmit}>
          <div className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] px-4 py-2 rounded-none rounded-r-md text-white font-semibold shadow-md ">
            Detect
          </div>
        </RippleButton>
      </div>
    </div>
  );
};
export default ImageLinkForm;
