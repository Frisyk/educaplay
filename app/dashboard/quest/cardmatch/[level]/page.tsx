import GamesCard from "@/components/Games/CardMatch";

// export const generateMetadata = async ({params}: {params: MateriParams}) => {
//   const {title, materi1} = materi[params.id]
//   return {
//     title: title,
//     description: materi1
//   }
// }

type MateriParams = {
  level: number;
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