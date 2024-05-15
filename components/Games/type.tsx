import { StaticImageData } from "next/image";

export interface Card {
    cardId: number;
    name: string;
    src: StaticImageData;
    matched: boolean
  }
  