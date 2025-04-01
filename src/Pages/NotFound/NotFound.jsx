import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function NotFound() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./404.json"),
    });
    return () => animation.destroy();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-ori_white">
      <button
        onClick={goBack}
        className="absolute tektur top-20 z-40 left-5 text-black flex gap-1 justify-center items-center"
        >
        <IoIosArrowBack />
        BACK
      </button>
      <div
        ref={containerRef}
        className="md:w-96 md:h-96 w-64 h-64"
        style={{ width: "40%", height: "40%" }}
      />
    </div>
          <div className="relative w-full ">
          <img
            src="./assets/bg-white-orange.svg"
            alt="step"
            className="gbody top-0 w-full z-10"
          />
        </div>
        </>
  );
}

export default NotFound;
