import TopNavigation from "@/components/TopNavMateri";
import { materi } from "@/components/data";
import Image from "next/image";


type MateriParams = {
  id: number;
};

function MateriPage({ params }: { params: MateriParams }) {
  const { title, materi1, materi2, materi3, image } = materi[params.id];

  return (
    <main className="min-h-screen py-20 flex bg-blue-50 md:w-[60%] mx-auto flex-col items-center">
      <TopNavigation id={`/materi/${params.id}`} />
      <div className="w-[90%] mx-auto  flex flex-col items-center">
        <h1 className="text-3xl font-bold my-5 text-center bg-blue-100 p-3">{title}</h1>
        <div className="text-lg mt-3 text-justify whitespace-pre-line">
          <p>{materi1}</p>
          {image && 
            <Image
              src={image}
              alt={title}
              width={400}
            />
          }
          {materi2 && <p>{materi2}</p>} <br />
          {materi3 && <p>{materi3}</p>} <br />
        </div>
      </div>
    </main>
  );
}

export default MateriPage