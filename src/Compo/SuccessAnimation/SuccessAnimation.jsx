// for Success animation fo sending

import React from "react";
import Lottie from "lottie-react";
import successAnimation from "./success.json";

const SuccessAnimation = ({ isLoading }) => {
  return (
    <div className="flex justify-center mt-4">
      {isLoading ? (
        <Lottie
          animationData={successAnimation}
          loop={isLoading}
          autoplay
          className="w-32 h-32"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SuccessAnimation;
