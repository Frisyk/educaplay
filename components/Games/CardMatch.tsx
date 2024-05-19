'use client'

import { GameResources } from "../../lib/data";
import { useEffect, useState } from "react";
import { Card } from "./type";
import CardComponent from "./Card";
import ModalComponent from "./Modal";
import { Nav } from "./Nav";


function GamesCard({level}: {level: string}) {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [matched, setMatched] = useState(false)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (timer > 0 && gameStarted) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0 && gameStarted) {
      alert("Waktu Habis");
      setGameStarted(false); 
    } 
  }, [timer, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setMatched(false)
    setTimer(120); // 2 minutes in seconds
    shuffleCards();
  };

  const shuffleCards = () => {
    const suffledCards: Card[] = [...GameResources].sort(() => Math.random() - 0.5).map((card) => ({ ...card }));
    setCards(suffledCards);
    setTurns(0);
  };

  // handle choice
  const handleClick = (card: Card) => {
    if (card === choiceOne || card === choiceTwo) {
      return; // Tidak lakukan apa-apa jika kartu yang sama diklik lagi
    }
    choiceOne !== null ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected choice
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if(choiceOne.name === choiceTwo.name){
        setCards( prev => {
          return prev.map( card => {
            if(card.name === choiceOne.name) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }

  }, [choiceOne, choiceTwo])  

  // reset choice
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setMatched(false)
    setTurns(prevTurns => prevTurns + 1)
  }

  const resetGame = () => {
    setShowModal(false)
    setMatched(false)
    setGameStarted(false)
    setCards([])
    setTurns(0)
  }

  useEffect(() => {
    const allMatched = cards.length > 0 && cards.every((card) => card.matched === true);  
    if (allMatched) {
      setMatched(true);
      setShowModal(true);
    }
    
  }, [cards]);
  
  return (
    <div className="text-center text-blue-800">
      <Nav title="Card Match"/>
      <p className="mt-1">level: {level}</p>
      {!gameStarted ? (
        <button className="py-2 px-5 my-5 outline rounded-full font-bold text-2xl" onClick={startGame}>
          Ayo Mulai
        </button>
      ) : (
        <button className="py-2 px-5 my-5 outline rounded-full font-bold text-2xl" onClick={resetGame}>
          {matched ? "Selesai" : timer > 0 ? `Timer: ${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}` : "Waktu Habis"}
        </button>
      )}
      <div className="flex flex-wrap gap-8 items-center justify-center py-10">
        {cards.map((card) => (
          <CardComponent key={card.cardId} card={card} handleClick={handleClick} choiceOne={choiceOne} choiceTwo={choiceTwo} matched={matched} />
        ))}
      </div>
      {/* <LevelList levels={levels}/> */}
      <ModalComponent showModal={showModal} resetGame={resetGame} />
    </div>
  );
    
}

export default GamesCard;