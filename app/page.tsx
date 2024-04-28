'use client'
import { useSession, signIn } from "next-auth/react"
import { redirect } from 'next/navigation';  

import Image from "next/image";
import Link from "next/link";
import hero from "../public/hero.png"
import Icon from "@/public/google";

export default function Home() {
  const { data: session, status } = useSession()
console.log(session);

  if(status === "authenticated"){
    return redirect('/dashboard')
  }
  
  return (
    <main className="w-full min-h-screen pb-10 text-blue-950 bg-white flex items-center flex-col ">
      {/* <h1 className="font-semibold text-2xl text-wrap uppercase">
        Educaplay
      </h1> */}
      <Image
        src={hero}
        alt="hero picture"
        width={800}
        height={1200}
      />
      <div className="rounded-3xl bg-white flex items-center flex-col mt-[-50px] z-20">
      <p className="text-3xl p-12 font-bold leading-[45px]">
      Belajar Agama <br /> dengan Asyik dan Menyenangkan <br /> Yuk
      </p>
        <Link className="p-5 py-7 mb-10 bg-blue-800 text-white w-4/5 text-center text-xl font-bold rounded-xl flex gap-5 items-center justify-center " href={"/dashboard"}>
          Menuju Halaman Utama
        </Link>
        <button onClick={() => signIn('google')} className="p-5 bg-blue-50 text-blue-800 outline w-4/5 text-center text-xl rounded-xl flex gap-5 items-center justify-center " >
          <Icon/>
          Login with Google
        </button>
      </div>
      
      <h1 className="absolute text-white p-4 m-5 rounded-2xl text-3xl right-0 font-semibold tracking-wide">EducaPlay</h1>
    </main>
  );
}


