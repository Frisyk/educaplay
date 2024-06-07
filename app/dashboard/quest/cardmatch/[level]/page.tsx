import GamesCard from "@/components/Games/CardMatch";
import { GameResources } from "@/lib/data";

export const generateMetadata = async ({params}: {params: MateriParams}) => {
  const title = GameResources.find(gr => gr.level == params.level)
  return {
    title: `Card Match Level: ${title?.level}`,
    description: title?.cards
  }
}

type MateriParams = {
  level: string;
};

async function MateriPage({ params }: { params: MateriParams }) {
  const level = GameResources.find(gr => gr.level == params.level.replace(/%20/g, " "))  

  return (
    <main>
      <GamesCard level={level?.level}/>
    </main>
  );
}

export default MateriPage