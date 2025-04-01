import React from "react";
import { GiSpades, GiHearts, GiClubs, GiDiamonds } from "react-icons/gi";

const suitIcons = {
  H: <GiHearts size={40} className="text-red-600" />,
  D: <GiDiamonds size={40} className="text-red-600" />,
  C: <GiClubs size={40} />,
  S: <GiSpades size={40} />,
};


const GameCard = ({ rank, suit, isFaceUp }) => {
    return (
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
        {isFaceUp ? (
          <>
            <div className="text-xl font-bold">{rank}</div>
            <div>{suitIcons[suit]}</div>
          </>
        ) : (
          <div className="bg-gray-300 w-16 h-24 flex justify-center items-center rounded-lg">
            <div className="text-xl font-bold">❓</div> {/* Face-down card */}
          </div>
        )}
      </div>
    );
  };
  
  export default GameCard;