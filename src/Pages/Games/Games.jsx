import React, { useState } from "react";
import GameCard from "../../Compo/GameCard/GameCard";
import "./Games.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import GitHubCloneButton from "../../Compo/GithubCloneButton/GithubCloneButton";
import { motion } from "framer-motion";

const Games = () => {
  const [gameId, setGameId] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [winner, setWinner] = useState("");
  const [dealerRevealed, setDealerRevealed] = useState(false);
  const [isDealerDrawing, setIsDealerDrawing] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const navigate = useNavigate();

  // Game Start
  const startGame = async () => {
    const response = await fetch(
      "http://99.79.63.2:8000/api/blackjack/start-game/",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setGameId(data.id);
    setPlayerCards(data.player_hand);
    setDealerCards([
      { suit: "back", rank: "back" },
      { suit: "back", rank: "back" },
    ]);
    setWinner(""); //Reset
    setDealerRevealed(false);
    setPlayerScore(calculateScore(data.player_hand));
    setDealerScore(
      calculateScore([
        { suit: "back", rank: "back" },
        { suit: "back", rank: "back" },
      ])
    );
    setGameEnded(false);
  };

  // Score Calculate
  const calculateScore = (hand) => {
    let score = 0;
    let aceCount = 0;
    hand.forEach((card) => {
      if (card.rank !== "back") {
        score += card.value;
        if (card.rank === "A") aceCount += 1;
      }
    });
    while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount -= 1;
    }
    return score;
  };

  // Hit
  const hit = async () => {
    if (!gameId || gameEnded) return;
    const response = await fetch(
      `http://99.79.63.2:8000/api/blackjack/hit/${gameId}/`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setPlayerCards(data.player_hand);
    setPlayerScore(calculateScore(data.player_hand));

    if (data.showed === true) {
      revealDealerCards();
    }

    setWinner(data.winner);
    if (data.winner) {
      setGameEnded(true);
    }
  };
  const revealDealerCards = async () => {
    const response = await fetch(
      "http://99.79.63.2:8000/api/blackjack/start-game/",
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setDealerCards(data.dealer_hand);
    setDealerScore(calculateScore(data.dealer_hand));
    setDealerRevealed(true);
  };

  // Stand
  const stand = async () => {
    if (!gameId || gameEnded) return;
    setIsDealerDrawing(true);

    const response = await fetch(
      `http://99.79.63.2:8000/api/blackjack/stand/${gameId}/`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setDealerCards(data.dealer_hand);
    setDealerScore(calculateScore(data.dealer_hand));
    setDealerRevealed(true);
    setWinner(data.winner);
    setGameEnded(true);

    await dealerDrawCards(data.dealer_hand);
  };

  // Dealer Side
  const dealerDrawCards = async (initialCards) => {
    let tempDealerCards = [...initialCards];
    let tempDealerScore = calculateScore(tempDealerCards);

    while (tempDealerScore < 17) {
      const response = await fetch(
        `http://99.79.63.2:8000/api/blackjack/hit/${gameId}/`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      tempDealerCards.push(data.card);

      tempDealerScore = calculateScore(tempDealerCards);

      setDealerCards([...tempDealerCards]);

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    setIsDealerDrawing(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      className="game-screen h-screen flex flex-col items-center justify-center z-40 tektur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      <button
        onClick={goBack}
        className="absolute top-5 z-40 left-5 text-white flex gap-1 justify-center items-center"
      >
        <IoIosArrowBack />
        BACK
      </button>
      {!gameEnded && (
        <>
          <h1 className="text-6xl text-white pb-10 z-40 ">BlackJack</h1>
          <button
            onClick={startGame}
            className="bg-blue-500 z-40 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Game Start
          </button>
        </>
      )}

      <div className="flex flex-col space-y-3 items-center">
        <div className="flex space-x-2 mt-4 z-40">
          {playerCards.map((card, index) => (
            <GameCard
              key={index}
              rank={card.rank}
              suit={card.suit}
              isFaceUp={true}
            />
          ))}
        </div>
        <h2 className="z-40 text-ori_white">{playerScore}</h2>
      </div>

      <div className="flex flex-col space-y-3 items-center">
        <div className="flex space-x-2 mt-4 z-40">
          {dealerCards.map((card, index) => (
            <GameCard
              key={index}
              rank={card.rank}
              suit={card.suit}
              isFaceUp={dealerRevealed || card.rank !== "back"}
            />
          ))}
        </div>
        <h2 className="text-ori_white z-40">{dealerScore}</h2>
      </div>
      <GitHubCloneButton />
      {!gameEnded && (
        <div className="flex space-x-4 mt-6 z-40">
          <button
            onClick={hit}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Hit
          </button>
          <button
            onClick={stand}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
          >
            Stand
          </button>
        </div>
      )}

      {gameEnded && (
        <div className="flex space-x-4 mt-6 z-40">
          <button
            onClick={startGame}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-700 transition"
          >
            Restart
          </button>
        </div>
      )}

      {winner && (
        <p className="text-xl text-white font-bold mt-4 z-40">
          Winner : {winner}
        </p>
      )}

      {isDealerDrawing && (
        <p className="text-xl text-white font-bold mt-4">
          The dealer is drawing a card...
        </p>
      )}
    </motion.div>
  );
};

export default Games;
