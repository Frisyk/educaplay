import TopNavigation from "@/components/TopNavMateri";
import { materi } from "@/components/data";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Materi",
  description: 'Materi belajar PAI tentang shalat.',
};


type MateriParams = {
  id: number;
};

function MateriPage({ params }: { params: MateriParams }) {
  const { title, materi1, materi2, materi3, image } = materi[params.id];

  return (
    <main className="min-h-screen py-20 flex  md:w-[60%] mx-auto flex-col items-center">
      <TopNavigation id={`/dashboard/materi/${params.id}`} />
      <div className="w-[90%] mx-auto  flex flex-col text-blue-800 items-center">
        <h1 className="text-3xl font-bold my-5 text-center rounded-2xl text-blue-900 bg-blue-100 p-3">{title}</h1>
        <div className="text-base leading-8 mt-3 text-justify whitespace-pre-line">
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