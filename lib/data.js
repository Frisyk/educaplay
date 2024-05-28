
// level 1
import takbir from "../public/games/takbir.png";
import sujud from "../public/games/sujud.png";
import ruku from "../public/games/ruku.png";
import sujud2 from "../public/games/sujud2.png";
import takbir2 from "../public/games/takbir2.png";
import ruku2 from "../public/games/ruku2.png";

// level 2
import ashar from "../public/games/ashar.png";
import dzuhur from "../public/games/dzuhur.png";
import subuh from "../public/games/subuh.png";
import isya from "../public/games/isya.png";
import magrib from "../public/games/magrib.png";
import pashar from "../public/games/pashar.png";
import pdzuhur from "../public/games/pdzuhur.png";
import psubuh from "../public/games/pshubuh.png";
import pisya from "../public/games/pisya.png";
import pmagrib from "../public/games/pmagrib.png";

export const GameResources = [
    {
        level: 1,
        cards: [
            {
                cardId: 1,
                matched: false,
                name: "sujud",
                src: sujud,
            },
            {
                cardId: 2,
                matched: false,
                name: "ruku",
                src: ruku,
            },
            {
                cardId: 3,
                matched: false,
                name: "takbir",
                src: takbir,
            },
            {
                cardId: 4,
                matched: false,
                name: "takbir",
                src: takbir2,
            },
            {
                cardId: 5,
                matched: false,
                name: "sujud",
                src: sujud2,
            },
            {
                cardId: 6,
                matched: false,
                name: "ruku",
                src: ruku2,
            },
        ],
    },
    {
        level: 2,
        cards: [
            {
                cardId: 7,
                matched: false,
                name: "ashar",
                src: ashar,
            },
            {
                cardId: 8,
                matched: false,
                name: "dzuhur",
                src: dzuhur,
            },
            {
                cardId: 9,
                matched: false,
                name: "subuh",
                src: subuh,
            },
            {
                cardId: 10,
                matched: false,
                name: "isya",
                src: isya,
            },
            {
                cardId: 11,
                matched: false,
                name: "magrib",
                src: magrib,
            },
            {
                cardId: 12,
                matched: false,
                name: "ashar",
                src: pashar,
            },
            {
                cardId: 13,
                matched: false,
                name: "dzuhur",
                src: pdzuhur,
            },
            {
                cardId: 14,
                matched: false,
                name: "subuh",
                src: psubuh,
            },
            {
                cardId: 15,
                matched: false,
                name: "isya",
                src: pisya,
            },
            {
                cardId: 16,
                matched: false,
                name: "magrib",
                src: pmagrib,
            },
        ],
    },
];
