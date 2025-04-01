import React from 'react';
import { TfiLocationArrow } from "react-icons/tfi";


const GitHubCloneButton = () => {
  const openGitHubRepo = () => {
    const repoUrl = "https://github.com/meso1007/Python-BlackJack";
    window.open(repoUrl, "_blank"); //open on new tab
  };

  return (
    <button
      onClick={openGitHubRepo}
      className="fixed top-2/3 right-4 transform -translate-y-1/2 bg-ori_gray text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-gray-600 z-40"
    >
        <span><TfiLocationArrow/></span>
      <span>Open on GitHub</span>
    </button>
  );
};

export default GitHubCloneButton;
