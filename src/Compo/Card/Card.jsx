import React, { useEffect, useRef } from 'react';
import "./Card.css";

const Card = ({ bgcolor, header, desc1, desc2, isAway }) => {
  const cardRef = useRef(null); 

  useEffect(() => {
    const rotateCards = () => {
      const cards = document.querySelectorAll(".maincard");
      let angle = 0;
      cards.forEach((card, idx) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = cards.length - idx;
        }
      });
    };

    rotateCards();
  }, [isAway]); // Re-run when 'isAway' changes

  return (
    <div
      className={`maincard w-[350px] h-[350px] rounded-[25px] overflow-hidden shadow-lg ${isAway ? 'away' : ''}`}
      style={{ backgroundColor: bgcolor }}
      ref={cardRef}
    >
      <div className="px-8 py-10 font-bold w-full h-full flex flex-col justify-between">
        <h3 className="text-2xl font-semibold mb-2">#{header}</h3>
        <p className="text-4xl text-black">{desc1}</p>
        <p className="text-4xl text-black">{desc2}</p>
      </div>
    </div>
  );
};

export default Card;
