import { React, useState } from "react";
import { AiOutlineProject, AiFillProject } from "react-icons/ai";
import { MdOutlineMessage, MdMessage } from "react-icons/md";
import { BsMusicPlayer, BsMusicPlayerFill } from "react-icons/bs";

const Header = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (section) => {
    setHovered(section);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <header className="fixed w-full bg-transparent text-black p-4 flex justify-between items-center px-12 border-b border-black ">
      <div className="text-xl font-bold flex justify-center items-center">
        <p className="border-r-2 border-black pr-1">PORTFOLIO</p>
        <a href="/" className="pl-1">
          SHOYA HORIUCHI
        </a>
      </div>
      <nav>
        <ul className="flex space-x-6 ">
          <li>
            <a
              href="/gallery"
              className=" text-4xl"
              onMouseEnter={() => handleMouseEnter("gallery")}
              onMouseLeave={handleMouseLeave}
            >
              {hovered === "gallery" ? (
                <BsMusicPlayerFill />
              ) : (
                <BsMusicPlayer />
              )}
            </a>
          </li>
          <li>
            <a
              href="/works"
              className="text-4xl"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={handleMouseLeave}
            >
              {hovered === "projects" ? (
                <AiOutlineProject />
              ) : (
                <AiFillProject />
              )}
            </a>
          </li>
          <li>
            <a
              href="https://next-notion-blog-web-app.vercel.app/"  //open on new tab
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={handleMouseLeave}
            >
              {hovered === "blog" ? <MdMessage /> : <MdOutlineMessage />}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
