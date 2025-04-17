import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-ori_gray z-40 
        sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 
        xl:bottom-16 xl:right-16"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
