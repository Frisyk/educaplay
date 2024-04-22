'use client'

import Image, { StaticImageData } from "next/image";
import { GameResources } from "../data";
import { useState } from "react";

interface Card {
  cardId: number;
  name: string;
  src: StaticImageData;
}

function GamesCard() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, SetChoiceOne] = useState(null)
  const [choiceTwo, SetChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const suffledCards: Card[] = [...GameResources].sort(() => Math.random() - 0.5).map((card) => ({ ...card }));
    setCards(suffledCards);
    setTurns(0);
  };

  const handleClick = (card: Card) => {
    console.log(card);
  };

  return (
    <div className="text-center text-blue-800">
      <h1 className="text-4xl font-bold">Card Match</h1>
      <button className="p-5 my-5 outline rounded-full font-bold text-2xl" onClick={shuffleCards}>
        Ayo Mulai!
      </button>
      <div className="flex flex-wrap gap-10 items-center justify-center py-10">
        {cards.map((card) => (
          <div className="card" key={card.cardId} onClick={() => handleClick(card)}>
            <div>
              <Image className="w-48" src={card.src} alt="card front" />
              {/* <Image className="back" src="/img/cover.png" alt="card back" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesCard;
