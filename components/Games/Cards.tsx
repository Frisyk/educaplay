'use client'

import Image, { StaticImageData } from "next/image";
import { GameResources } from "../data";
import { useEffect, useState } from "react";
import cover from "../../public/games/cover.png"
import Link from "next/link";

interface Card {
  cardId: number;
  name: string;
  src: StaticImageData;
  matched: boolean
}

function GamesCard() {
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
    choiceOne? setChoiceTwo(card) : setChoiceOne(card)
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
      <h1 className="text-4xl font-bold">Card Match</h1>
      {!gameStarted ? (
          <button className="py-2 px-5 my-5 outline rounded-full font-bold text-2xl" onClick={startGame}>
            Ayo Mulai
          </button>
        ) : (
          <button className="py-2 px-5 my-5 outline rounded-full font-bold text-2xl" onClick={resetGame}>
            {matched ? 
              "Selesai"
             : timer > 0 ? 
              `Timer: ${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`
             : 
              "Waktu Habis"
            }
          </button>
        )}
      <div className="flex flex-wrap gap-10 items-center justify-center py-10">
        {cards.map((card) => 
         (
          <div className={card === choiceOne || card === choiceTwo || card.matched? "card flipped" : "card"} key={card.cardId} onClick={() => handleClick(card)}>
            <div>
              <Image className="max-w-40 front" src={card.src} alt="card front" />
              <Image className="max-w-40 back" src={cover} alt="card back" />
            </div>
          </div>
        ))}
      </div>
        <div className={!showModal ? "hidden" : "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"}>
          <div className="bg-white p-5 rounded-lg m-5">
            <p className="text-2xl text-blue-800 font-bold">Selamat!! <br /> Anda menyelesaikan semuanya 🎉✨</p>
            <div className="flex justify-between mt-4 m-5">
              <button className="px-4 py-2 text-xl font-bold bg-blue-500 text-white rounded outline hover:bg-blue-600 mr-2" onClick={resetGame}>
                Main lagi?
              </button>
              <Link className="px-4 py-2 text-xl font-bold bg-transparent text-blue-800 rounded outline" href={'/dashboard/games'}>
                Kembali
              </Link>
            </div>
          </div>
        </div>

    </div>
  );
}

export default GamesCard;
