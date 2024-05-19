import Link from "next/link";
import { Nav } from "./Nav";
import { ListProps } from "./type";


const LevelList: React.FC<ListProps> = ({ levels}) => {
  return (
    <div className="flex flex-col">      
        {levels.map((level, index) => (
          <Link href={`/dashboard/quest/cardmatch/${level}`} className="px-5 py-5 text-2xl outline mb-5 rounded-xl" key={index}>{level}</Link>
        ))}
      
    </div>
  );
};

export default LevelList;
