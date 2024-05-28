import { StaticImageData } from "next/image";

export interface Card {
    cardId: number;
    name: string;
    src: StaticImageData;
    matched: boolean
  }
  
export interface ListProps {
    levels: number[]; // Array of level names (e.g., ["Common", "Rare", "Epic"])
  }