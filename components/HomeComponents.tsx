'use client'
import { useSession, signIn } from "next-auth/react"
import { redirect } from 'next/navigation';  

import Image from "next/image";
import Link from "next/link";
import hero from "../public/hero.png"
import herow from "../public/bg.png"
import Icon from "@/public/google";

export default function HomeComponent() {
  const { data: session, status } = useSession()

  if(status === "authenticated"){
    return redirect('/dashboard')
  }

  
  return (
    <main className="w-full min-h-screen pb-20 md:pb-0 text-blue-950 bg-white flex items-center flex-col md:flex-row ">
      {/* <h1 className="font-semibold text-2xl text-wrap uppercase">
        ShalatYUK
      </h1> */}
      <Image
        src={hero}
        alt="hero picture"
        width={1000}
        height={1000}
        className="h-3/4 object-cover md:hidden"
      />
      <Image
        src={herow}
        alt="hero picture"
        width={1000}
        height={1000}
        className="w-[40%] h-screen hidden md:block"
      />
      
      <div className="rounded-3xl bg-white flex items-center flex-col mt-[-50px] z-20">
      <p className="text-2xl p-12 font-bold text-blue-800 leading-[30px] md:ml-10 md:leading-relaxed md:text-7xl">
      Belajar Sholat <br /> dengan Asik dan Menyenangkan <br /> Yuk 🚀
      </p>
        <Link className="p-3 py-5 mb-5 bg-blue-800 text-white w-4/5 text-center text-xl rounded-xl" href={"/dashboard"}>
          Menuju Halaman Utama
        </Link>
        <button onClick={() => signIn('google')} className="p-4 bg-blue-50 text-blue-800 outline w-4/5 text-center text-xl rounded-xl flex gap-5 items-center justify-center " >
          <Icon/>
          Login with Google
        </button>
      </div>
      
      <h1 className="absolute text-white p-4 m-5 rounded-2xl text-3xl right-0 font-semibold tracking-wide">ShalatYUK</h1>
    </main>
  );
}


