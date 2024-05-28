import Link from "next/link";
import { ListProps } from "./type";


const LevelList: React.FC<ListProps> = ({ levels}) => {
  return (
    <div className="flex flex-col">      
        {levels.map((level, index) => (
          <Link href={`/dashboard/quest/cardmatch/${level}`} className="px-5 py-5 text-2xl outline mb-5 rounded-xl" key={index}>Level {level}</Link>
        ))}
      
    </div>
  );
};

export default LevelList;
