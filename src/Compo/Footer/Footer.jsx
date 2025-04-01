import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SuccessAnimation from "../SuccessAnimation/SuccessAnimation";
import { div } from "framer-motion/client";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true); 
    }, 2000);
  };

  return (
    <footer className="pt-64 pb-12 min-h-screen bg-ori_orange">
      <div className="w-full text-gray-900 flex px-4">
        <div className="w-2/5 flex flex-col px-12">
          <div className="flex flex-col justify-evenly space-y-6 h-full">
            <h1 className="text-6xl font-bold">Menu</h1>
            <div className="text-3xl flex flex-col space-y-2">
              <h2 className="font-bold">SHOYA HORIUCHI</h2>
              <p>- Fujisawa, Kanagawa, Japan</p>
              <p>- Vancouver, BC, Canada</p>
            </div>
            <div>
              <ul className="flex flex-col space-y-6 font-bold text-2xl">
                <li className="uppercase">
                  <a
                    href="mailto:diegoshoya2017@gmail.com"
                    className="uppercase font-bold flex items-center gap-2 hover:underline cursor-pointer"
                  >
                    diegoshoya2017@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="uppercase font-bold flex items-center gap-2 hover:underline cursor-pointer"
                  >
                    +81 70 8458 6447
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row space-x-3 items-end text-4xl">
              <a
                href="https://www.linkedin.com/in/shoya-horiuchi-83b785278/"
                className="uppercase font-bold flex items-center hover:underline cursor-pointer hover:bg-gray-900 hover:text-white p-2 rounded-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sh02__nmi/"
                className="uppercase font-bold flex items-center hover:underline cursor-pointer hover:bg-gray-900 hover:text-white p-2 rounded-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/meso1007"
                className="uppercase font-bold flex items-center hover:underline cursor-pointer hover:bg-gray-900 hover:text-white p-2 rounded-lg"
              >
                <FaGithub />
              </a>
            </div>

            <div className="">
              {submitted ? (
                <div className="flex justify-center items-center">
                  <SuccessAnimation isLoading={submitted} />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative flex w-full max-w-sm gap-5"
                >
                  <input
                    required
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full bg-transparent border-b-2 border-gray-900 placeholder-gray-900 placeholder:font-bold outline-none px-2 py-3 text-lg"
                  />
                  <button
                    type="submit"
                    className="border-2 border-gray-900 px-3 py-0 text-lg font-bold rounded-md hover:bg-gray-900 hover:text-ori_white cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              {/* 送信完了後のメッセージ */}
              {submitted && !submitted && (
                <div className="text-center mt-4 text-green-500 font-bold">
                  <p>Thank you for subscribing!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="w-3/5 flex text-8xl flex-col items-center font-bold">
          <a
            href="/works"
            className="w-full border-gray-900 py-10 border-t-2 border-b-2 hover:bg-gray-900 hover:text-ori_white"
          >
            <div className="flex">
              <p className="text-xl pr-20">001.</p>
              <span className="w-full">/Works.</span>
              <MdArrowOutward />
            </div>
          </a>
          <a
            href="/gallery"
            className="w-full border-gray-900 py-10 border-b-2 hover:bg-gray-900 hover:text-ori_white"
          >
            <div className="flex">
              <p className="text-xl pr-20">002.</p>
              <span className="w-full">/Gallery.</span>
              <MdArrowOutward />
            </div>
          </a>
          <a
            href="https://next-notion-blog-web-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border-gray-900 py-10 border-b-2 hover:bg-gray-900 hover:text-ori_white"
          >
            <div className="flex">
              <p className="text-xl pr-20">003.</p>
              <span className="w-full">/Blog.</span>
              <MdArrowOutward />
            </div>
          </a>
        </nav>
      </div>

      <div className="text-center text-gray-900 font-bold pt-8 text-sm opacity-60">
        © {new Date().getFullYear()} Shoya Horiuchi Portfolio Website. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
