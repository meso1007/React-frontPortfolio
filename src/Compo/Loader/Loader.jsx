import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./loading.json";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-ori_white">
      <Lottie animationData={loadingAnimation} loop className="w-64 h-64" />
    </div>
  );
};

export default Loader;
