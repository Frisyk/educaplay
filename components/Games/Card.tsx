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
    <div className={card === choiceOne || card === choiceTwo || card.matched ? "card flipped w-32" : "card w-32"} onClick={() => handleClick(card)}>
      <div>
        <Image className="max-w-48 front" src={card.src} alt="card front" />
        <Image className="max-w-48 back" src={cover} alt="card back" />
      </div>
    </div>
  );
  
  export default CardComponent;
  