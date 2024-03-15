import React from 'react';
import Rank from '../Rank/Rank';
import RippleButton from 'material-ripple-button';
const ImageLinkForm = ({
  onInputChange,
  onBtnSubmit,
  userName,
  userEntries,
  input,
}) => {
  return (
    <form className="flex flex-col items-center" onSubmit={onBtnSubmit}>
      <p className="text-4xl  bg-gradient-to-r from-amber-500 to-pink-500 font-bold text-transparent bg-clip-text mb-10 text-center  md:text-left animate-fade-right lg:max-w-[800px] ">
        {
          'This Magic Brain! Throw me a picture. I will try to find the best words to descibe it.'
        }
      </p>
      <Rank userName={userName} userEntries={userEntries} />
      <div id="form" className="flex items-center p-6 rounded-md">
        <input
          type="text"
          className="py-2 px-4 rounded-l-md shadow-md"
          placeholder="Enter Image URL"
          onChange={onInputChange}
          value={input}
        />
        <RippleButton>
          <div className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] px-4 py-2 rounded-none rounded-r-md text-white font-semibold shadow-md ">
            Detect
          </div>
        </RippleButton>
      </div>
    </form>
  );
};
export default ImageLinkForm;
