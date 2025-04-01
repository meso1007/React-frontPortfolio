"use client";
import { useState, useEffect } from "react";
import MusicCard from "../../Compo/MusicCard/MusicCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

import "./Gallery.css";
const Gallery = () => {
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
  const [data, setData] = useState([]);

  const favoriteTracks = [
    {
      spotify_uri: "spotify:track:23r4gJTjStmdKVZAbdEFft?si=933a35eb030a4e5a",
    },
    {
      spotify_uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
    },
    {
      spotify_uri: "spotify:track:0nj9Bq5sHDiTxSHunhgkFb?si=e5edea55d7e0467e",
    },
    {
      spotify_uri: "spotify:track:7CanFKpPTEgaxqIu6RXBIf?si=98d0fef2da214b68",
    },
    {
      spotify_uri: "spotify:track:3ebYtLVuV4HzEZUDcpZB9p?si=d752d74ec0d34c88",
    },
    {
      spotify_uri: "spotify:track:5lw8Mgb4LyhriPIC86gV6e?si=788bee02e6054ab7",
    },
    {
      name: "Blinding Lights",
      spotify_uri: "spotify:track:6EUcP55GlbmsmCzfL2vxtZ?si=b554432c41114e6f",
    },
    {
      spotify_uri: "spotify:track:0uxSUdBrJy9Un0EYoBowng?si=1870f4d9278647de",
    },
    {
      spotify_uri: "spotify:track:2ZRo7axmMPeSVUvDbGkJah?si=8bb98e5c3f8c4f20",
    },
    {
      spotify_uri: "spotify:track:2bQxqezLVNiJVeLO0RWPON?si=9e5ce5fafec04d18",
    },
    {
      spotify_uri: "spotify:track:5GZp8q9eZ9qn0TSwAayT1o?si=8ac050a1884b4671",
    },
    {
      spotify_uri: "spotify:track:2uvE4L5ZsYKpv8hbK4TIOt?si=8bed5d850fdd4c84",
    },
    {
      spotify_uri: "spotify:track:7raKnLKyQSatDiVVpiZDds?si=096f244d8b414782",
    },
    {
      spotify_uri: "spotify:track:39lSC8a6LbnIX2I87qOgai?si=7d90fd00776642e6",
    },
    {
      spotify_uri: "spotify:track:3eh51r6rFWAlGQRlHx9QnQ?si=f3971ebac8f34407",
    },
    {
      spotify_uri: "spotify:track:7lUdvbrsHvoUfqBt7JOwkZ?si=5bc4c876ce9245c4",
    },
    {
      spotify_uri: "spotify:track:4HfxDJ0uLHTLe0fZrx0MbQ?si=ac5dd890c84f433b",
    },
    {
      spotify_uri: "spotify:track:21LtZQQMQYwVIxc9O9Ygq8?si=fb80e71c7bd14c0c",
    },
  ];
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // UseEffect to load predefined songs
  useEffect(() => {
    setData(favoriteTracks); // Directly setting the predefined tracks
  }, [favoriteTracks]);
  return (
    <>
      <motion.div
        className="gbody min-h-screen z-40 w-full bg-ori_black tektur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        {" "}
        <button
          onClick={goBack}
          className="absolute tektur top-20 z-40 left-5 text-white flex gap-1 justify-center items-center"
        >
          <IoIosArrowBack />
          BACK
        </button>
        <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              className="svg-autotext"
              style={{
                fontSize: "120px",
                strokeWidth: "1",
              }}
              xmlSpace="preserve"
              fontSize="2rem"
              x="40%"
              y="30%"
              textAnchor="middle"
            >
              Tunes{" "}
            </text>
            <text
              className="svg-autotext2"
              xmlSpace="preserve"
              style={{
                fontSize: "200px",
                fontFamily: "'Funkie Retro Outline'",
                strokeWidth: "1",
              }}
              fontSize="1rem"
              x="50%"
              y="60%"
              textAnchor="middle"
            >
              Gallery
            </text>
            <text
              className="svg-autotext"
              xmlSpace="preserve"
              style={{
                fontSize: "130px",
                strokeWidth: "1",
              }}
              fontSize="2rem"
              x="60%"
              y="85%"
              textAnchor="middle"
            >
              Tracks
            </text>
          </svg>
        </div>
      </motion.div>
      <div className="gbody flex flex-wrap justify-center items-center min-h-screen bg-ori_black p-4">
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6 px-20 z-80">
            {data.length > 0 ? (
              data.map((track, index) => <MusicCard key={index} data={track} />)
            ) : (
              <p className="text-gray-700 text-lg">No tracks found...</p>
            )}
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <img
          src="./assets/bg-black-orange.svg"
          alt="step"
          className="gbody top-0 w-full z-10"
        />
      </div>
    </>
  );
};

export default Gallery;
