import React from 'react';
const FaceRecognition = ({ closeModal, imageIsHidden, imageUrl, box }) => {
  return (
    <div
      className={
        imageIsHidden
          ? 'hidden'
          : 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[500px]'
      }
    >
      <div className="relative">
        <div
          className="fixed -top-12 -right-4 text-4xl font-bolder text-orange-500 hover:text-amber-500    cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </div>
        <img
          id="inputImage"
          className="rounded-md"
          src={imageUrl}
          alt="metro image"
        />
        <div
          className="absolute  flex flex-wrap justify-center cursor-pointer shadow-inner shadow-blue-500"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
            boxShadow: '0 0 0 3px  #149df2 inset',
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
