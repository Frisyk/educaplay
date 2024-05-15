import Link from "next/link";
import { Nav } from "./Nav";

interface LevelListProps {
  levels: string[]; // Array of level names (e.g., ["Common", "Rare", "Epic"])
}

const LevelList: React.FC<LevelListProps> = ({ levels }) => {
  return (
    <div className="level-list font-bold flex flex-col text-2xl text-center text-blue-800">
        <Nav/>
        <h1 className="my-10">Pilih Tingkat Kesulitan mu🔥</h1>
      
        {levels.map((level, index) => (
          <Link href={`/dashboard/quest/cardmatch/${level}`} className="px-5 py-2 outline mb-5 rounded-xl" key={index}>{level}</Link>
        ))}
      
    </div>
  );
};

export default LevelList;
