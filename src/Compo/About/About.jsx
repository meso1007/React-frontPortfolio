import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  const [text, setText] = useState("Traveler??");

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setText("Traveler??");
      }, 0);
      setTimeout(() => {
        setText("Pianist??");
      }, 4500);
      setTimeout(() => {
        setText("Illustrator??");
      }, 8500);
      setTimeout(() => {
        setText("Web Developer!!");
      }, 12500);
    };
    textLoad();
  }, []);

  return (
    <section className="bg-ori_green w-screen" id="about">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="md:w-1/3 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <div className="md:max-h-[calc(100vh-50px+20px)] overflow-hidden rounded-t-full border-2 border-ori_blue shadow-lg flex-shrink-0 relative p-2">
            <div className="md:max-h-[calc(100vh-50px+20px)] overflow-hidden rounded-t-full border-2 border-ori_lightgreen shadow-lg flex-shrink-0 relative p-2">
              <div className="w-24 h-24 md:w-96 md:min-h-[550px] md:max-h-[calc(100vh-50px)] overflow-hidden rounded-t-full border-2 border-ori_blue shadow-lg flex-shrink-0 relative">
                <img
                  src="./assets/profile.png"
                  alt="Profile"
                  className="object-cover absolute md:-top-11 left-1/2 transform -translate-x-1/2"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-2/3 text-ori_white tektur"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <h2 className="text-7xl font-bold mb-6 leading-tight">Hi there!!</h2>
          <div className="container">
            <span className="text tektur">I'm a </span>
            <span className="text sec-text text-ori_orange font-bold tektur">
              {text}
            </span>
          </div>
          <p className="text-xl font-semibold leading-relaxed mb-6">
            I'm <span className="text-ori_orange tektur">SHOYA</span>,
            passionate about creating intuitive, user-friendly applications. I
            work with technologies like{" "}
            <span className="font-bold">React.js</span>,{" "}
            <span className="font-bold">Node.js</span> and{" "}
            <span className="font-bold">Django.py</span>, always exploring new
            tools and techniques to improve my skills and tackle challenges.
          </p>
          <p className="text-xl leading-relaxed">
            I love building responsive websites that look great on all devices,
            ensuring smooth user experiences. My goal is to create clean,
            efficient solutions that not only work well but also delight users.
          </p>
          <div className="flex justify-start gap-14 pt-14">
            <Button
              href={"/works"}
              label={"TO MY PROJECTS"}
              className="tektur bg-ori_blue2 hover:bg-ori_orange"
              size="lg"
            />
            <Button
              href={"/gallery"}
              label={"TO MY GALLERY"}
              background="ori_blue2"
              className="tektur hover:bg-ori_orange"
              size="lg"
            />
            <Button
              href={"https://next-notion-blog-web-app.vercel.app/"}
              label={"TO MY BLOG"}
              background="ori_blue2"
              className="tektur hover:bg-ori_orange"
              size="lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
