"use client";
import React from "react";
import { motion } from "framer-motion";

const MusicCard = ({ data }) => {
  if (!data)
    return <p className="text-gray-500 text-center">No track available</p>;

  return (
    <>
       <motion.div
        className="relative border border-ori_eme2 p-2 rounded-3xl tektur"
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }} //appear fi it's in viewport 
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative border border-ori_eme p-2 rounded-3xl">
          <div className="max-w-sm w-full text-center">
            {data.spotify_uri ? (
              <iframe
                src={`https://open.spotify.com/embed/track/${ //spotify url
                  data.spotify_uri.split(":")[2]
                }`}
                width="100%"
                height="160"
                frameBorder="0"
                allow="encrypted-media"
                className="rounded-lg py-0 my-0 block align-top"
                title={`Spotify track ${data.name}`}
                style={{ display: "block" }}
              ></iframe>
            ) : (
              <p className="text-gray-500 text-center">No track available</p>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MusicCard;
