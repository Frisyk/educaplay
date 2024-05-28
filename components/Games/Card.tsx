import Image from "next/image";
import cover from "../../public/games/cover.png";
import { Card } from "./type";

interface CardComponentProps {
    card: Card;
    handleClick: (card: Card) => void;
    choiceOne: Card | null;
    choiceTwo: Card | null;
    matched: boolean;
  }
  
  const CardComponent: React.FC<CardComponentProps> = ({ card, handleClick, choiceOne, choiceTwo, matched }) => (
    <div className={card === choiceOne || card === choiceTwo || card.matched ? "card flipped lg:w-56 w-40" : "card lg:w-56 w-40"} onClick={() => handleClick(card)}>
      <div>
        <Image className="lg:w-52 front" src={card.src} alt="card front" />
        <Image className="lg:w-52 back" src={cover} alt="card back" />
      </div>
    </div>
  );
  
  export default CardComponent;
  