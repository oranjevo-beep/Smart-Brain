import React from 'react';
const FaceRecognition = ({
  closeModal,
  imageIsHidden,
  imageUrl,
  // box,
  imageArray,
  isLoading,
}) => {
  return (
    <div
      className={
        imageIsHidden
          ? 'hidden'
          : 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[500px] lg:max-w-[800px]  mt-4 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-10'
      }
    >
      <div className="relative flex justify-center">
        <div
          className="fixed -top-12 -right-4 text-4xl font-bolder text-orange-500 hover:text-amber-500    cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </div>
        <img
          id="inputImage"
          className="rounded-md max-h-[300px] lg:max-h-[400px] "
          src={imageUrl}
          alt=""
        />
        {/* <div
          className="absolute  flex flex-wrap justify-center cursor-pointer shadow-inner shadow-blue-500"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
            boxShadow: '0 0 0 3px  #149df2 inset',
          }}
        ></div> */}
      </div>
      <div
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        className="max-w-[300px] p-8 bg-gradient-to-r from-amber-500 to-pink-500  rounded-md flex flex-col items-center justify-center"
      >
        <h3 className="text-md  text-slate-900 font-bold">
          {' '}
          Most probably I would describe this picture in these words:
        </h3>
        <p className=" text-sm md:text-md text-slate-700 font-medium">
          {isLoading ? 'Loading...' : imageArray.join(', ')}
        </p>
      </div>
    </div>
  );
};
export default FaceRecognition;
