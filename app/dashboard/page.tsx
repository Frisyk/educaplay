import { getCurrentUser } from '@/lib/session';
import Card from "@/components/Card";
import Image from "next/image";
import shalat from "@/public/pray.png";
import { materi } from "@/components/data";

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <main className='pb-20'>
      <h1 className="text-xl">Hai {user?.name}</h1>
      <div>
        {materi?.map((mtr, index) => (
          <Card key={mtr.id} id={index} nama={mtr.title} gambar={shalat} bab="1 shalat" />
        ))}
      </div>
    </main>
  );
}
