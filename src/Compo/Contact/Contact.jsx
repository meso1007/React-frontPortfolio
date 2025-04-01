import React from "react";
import { useEffect } from "react";
import "./Contact.css"
import KUTE from "kute.js";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdArrowRightAlt, MdVisibility } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    // KUTE.js to have a animation
    KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      {
        repeat: Infinity,
        duration: 2000,
        yoyo: true,
        easing: "easeInOut",
      }
    ).start();
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-ori_eme text-black pt-16 relative"
      id="contact"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="px-24  pb-20 flex flex-col gap-3">
        <h1 className="text-8xl font-semibold">Contact</h1>
        <hr className="border-black border-t-1 w-full" />
        </div>
        <div className="w-1/2 px-32">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            version="1.1"
            className="w-full h-full opacity-50"
          >
            <g transform="translate(390.4198898802373 318.38674568683257)">
              <path
                id="blob1"
                d="M113.1 -215.3C134.9 -183.4 132.8 -129.4 180 -89.9C227.2 -50.3 323.6 -25.2 377.6 31.2C431.6 87.5 443.1 175 384 193.9C325 212.9 195.3 163.3 119.5 143.7C43.8 124.1 21.9 134.6 -22.4 173.3C-66.7 212.1 -133.3 279.3 -169.1 275.8C-204.9 272.3 -209.8 198.1 -214.3 140.4C-218.8 82.7 -222.9 41.3 -245.3 -12.9C-267.7 -67.2 -308.3 -134.3 -304 -192.4C-299.7 -250.4 -250.3 -299.3 -192.2 -310.2C-134 -321.1 -67 -294 -10.7 -275.6C45.7 -257.1 91.3 -247.2 113.1 -215.3"
                fill="#59b5a1"
              />
            </g>
            <g
              transform="translate(485.5186812933289 299.41812103921507)"
              style={{ visibility: "hidden" }}
            >
              <path
              id="blob2"
                d="M38 -75.4C49.7 -59.1 59.9 -49.8 62.8 -38.4C65.8 -27 61.4 -13.5 56.2 -3C51 7.5 45 15 41.5 25.4C38 35.8 37 49.1 30.5 64.8C24 80.6 12 98.8 -5.4 108.2C-22.8 117.5 -45.7 118.1 -51.1 101.7C-56.5 85.3 -44.5 52.1 -58.1 32.3C-71.7 12.5 -110.8 6.3 -126.5 -9C-142.1 -24.3 -134.3 -48.7 -115.1 -58.8C-96 -68.9 -65.5 -64.7 -44.4 -75.6C-23.3 -86.4 -11.7 -112.2 0.7 -113.5C13.2 -114.8 26.3 -91.6 38 -75.4"
                fill="#003e31"
              />
            </g>
            <g
              transform="translate(489.89998251146784 295.6929641115736)"
              style={{ visibility: "hidden" }}
            >
              <path
                id="blob3"
                d="M105.1 -181C149.8 -156.2 209.1 -155.6 209.7 -129.5C210.2 -103.3 152 -51.7 131.9 -11.6C111.9 28.5 130 57 124.2 74C118.4 91.1 88.7 96.6 64 130.7C39.3 164.8 19.7 227.4 -12.2 248.5C-44 269.5 -88 249.1 -107.5 212C-127 174.9 -121.9 121.2 -162.4 83.1C-202.9 45 -289 22.5 -289.5 -0.3C-290.1 -23.2 -205.3 -46.3 -153.6 -65.1C-101.9 -83.9 -83.5 -98.2 -63.4 -137.3C-43.3 -176.4 -21.7 -240.2 4.2 -247.6C30.2 -254.9 60.3 -205.8 105.1 -181"
                fill="#59b5a1"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center relative pr-32">
        <div className="w-1/2 pl-24">
          <div className="text-7xl flex flex-col items-start justify-start font-semibold ">
            <h1>We</h1>
            <h1>Would</h1>
            <h1>Love</h1>
            <h1>to Hear</h1>
            <h1>From</h1>
            <h1 className="flex">
              <span>
                <MdArrowRightAlt />
              </span>
              You
            </h1>
          </div>
        </div>
        <div className="w-1/2 ">
          <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
          <hr className="border-black border-t-1 w-full" />
          <div className="flex w-full flex-row justify-between items-baseline pt-4 pb-20">
            <p className="text-lg text-gray-800 mb-6 w-1/3">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>

            <a
              href="mailto:diegoshoya2017@gmail.com"
              className="uppercase font-bold flex items-center gap-2 hover:underline cursor-pointer blink-underline"
            >
              diegoshoya2017@gmail.com
              <span>
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </div>
          <hr className="border-black border-t- w-full" />
          <div className="flex w-full flex-row justify-between items-baseline pt-4">
            <p className="text-lg text-gray-800 mb-6 w-1/3">
              Let's connect. Whether it's for work or just to chat, feel free to
              reach out through my social media.
            </p>
            <div className="flex flex-col space-y-3 items-end">
              <a
                href="https://www.linkedin.com/in/shoya-horiuchi-83b785278/"
                className="uppercase font-bold flex items-center gap-2 hover:underline cursor-pointer blink-underline"
              >
                LinkedIn
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
              </a>

              <a
                href="https://www.instagram.com/sh02__nmi/"
                className="uppercase font-bold flex items-center gap-2 hover:underline cursor-pointer blink-underline"
              >
                Instagram{" "}
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
              </a>

              <a
                href="https://github.com/meso1007"
                className="uppercase font-bold flex items-center gap-2 hover:underline cursor-pointer blink-underline"
              >
                GitHub{" "}
                <span>
                  <FaArrowUpRightFromSquare />
                </span>
              </a>
            </div>
          </div>

          {/* <form className="w-full max-w-lg space-y-4 relative z-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg text-black border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg text-black border border-gray-300"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg text-black border border-gray-300 h-32"
                ></textarea>
                <button className="bg-white text-ori_eme px-6 py-3 rounded-lg font-bold hover:bg-gray-200">
                  Send Message
                </button>
              </form>
       */}
        </div>
        {/* SVGをフォームの背景として配置 */}
      </div>
    </section>
  );
};
export default Contact;
