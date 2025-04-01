import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../../Compo/ProjectCard/ProjectCard";
import "./Works.css";
import { motion } from "framer-motion";

export default function Works() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  return (
    <>
      <motion.div
        className="min-h-screen dot-bg w-full bg-ori_white text-ori_eme pt-18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              className="svg-text"
              style={{
                fontSize: "200px",
                strokeWidth: "1",
              }}
              xmlSpace="preserve"
              fontSize="2rem"
              x="50%"
              y="50%"
              textAnchor="middle"
            >
              Project
            </text>

            <text
              style={{
                strokeWidth: "1",
              }}
              x="50%"
              y="55%"
              fontSize="2rem"
              textAnchor="middle"
              className="fill-ori_eme design svg-text2"
            >
              Shoya Horiuchi
            </text>

            {/* Workscape */}
            <text
              className="svg-text3"
              xmlSpace="preserve"
              style={{
                fontSize: "200px",
                fontFamily: "'Funkie Retro Outline'",
                strokeWidth: "1",
              }}
              fontSize="2rem"
              x="50%"
              y="80%"
              textAnchor="middle"
            >
              Workscape
            </text>
          </svg>
        </div>
      </motion.div>
      <div className="w-full dot-bg">
        <div className="grid grid-cols-3 gap-6 px-20">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                image={`${
                  project.image ? project.image : `/media${project.image}`
                }`}
                desc={project.desc}
                link={project.link}
              />
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
      </div>
      <div className="relative w-full">
        <img
          src="./assets/bg-white-orange.svg"
          alt="step"
          className=" top-0 w-full z-10"
        />
      </div>
    </>
  );
}
