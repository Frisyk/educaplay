"use client";

import React, { useState } from 'react';
import { Card } from '../type';

interface ItemProps {
  item: number;
  card: number
}

export function Item({ item, card }: ItemProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<number | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<number | null>(null)
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [matched, setMatched] = useState(false)
  const [showModal, setShowModal] = useState(false);

  // handle choice
  const handleClick = (card: number) => {
    if (card === choiceOne || card === choiceTwo) {
      return; // Tidak lakukan apa-apa jika kartu yang sama diklik lagi
    }
    
    choiceOne !== null ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div onClick={() => handleClick(card)} className="w-full bg-blue-200 p-10 my-5 rounded">
      <h1 className="text-3xl text-center">{item}</h1>
    </div>
  );
}
