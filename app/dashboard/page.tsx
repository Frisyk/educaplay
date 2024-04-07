import { getCurrentUser } from '@/lib/session';
import Card from "@/components/Card";
import Image from "next/image";
import shalat from "@/public/pray.png";
import { materi } from "@/components/data";
import TopNavigation from '@/components/TopNav';

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard",
  description: 'Dashboard wab app belajar PAI interaktif tentang shalat.',
};


export default async function Home() {
  const user = await getCurrentUser();
  return (
    <main className='pb-20'>
      <TopNavigation/>
      <h1 className="text-xl">Hai {user?.name}</h1>
      <div>
        {materi?.map((mtr, index) => (
          <Card key={mtr.id} id={index} nama={mtr.title} gambar={shalat} bab="1 shalat" />
        ))}
      </div>
    </main>
  );
}
