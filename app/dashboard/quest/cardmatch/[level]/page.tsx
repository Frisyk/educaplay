import TopNavigation from "@/components/TopNavMateri";
import { getPost } from "@/lib/action";
import { materi } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import defaultImg from "@/public/default.png"
import perbedaan from "@/public/perbedaan.png"
import GamesCard from "@/components/Games/GamesCard";

// export const generateMetadata = async ({params}: {params: MateriParams}) => {
//   const {title, materi1} = materi[params.id]
//   return {
//     title: title,
//     description: materi1
//   }
// }

type MateriParams = {
  level: string;
};

async function MateriPage({ params }: { params: MateriParams }) {
  const level = params.level;

  return (
    <main>
      <GamesCard level={level}/>
    </main>
  );
}

export default MateriPage