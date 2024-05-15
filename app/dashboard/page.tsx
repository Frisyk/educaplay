import { getAllPosts, getCurrentUser } from '@/lib/action';
import Card from "@/components/Card";
import shalat from "@/public/pray.png";
import TopNavigation from '@/components/TopNav';

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard",
  description: 'Dashboard web app belajar PAI interaktif tentang shalat.',
};


export default async function Home() {
  const materi = await getAllPosts()  
  return (
    <main className='pb-20'>
      <TopNavigation/>
      <h1 className="text-2xl font-extrabold text-blue-900 mt-20">BAB I : Belajar Sholat</h1>
      <div>
        {materi?.map((mtr, index) => (
          <Card key={mtr.id} id={index} nama={mtr.title!} gambar={shalat} bab={mtr.id} />
        ))}
      </div>
    </main>
  );
}
