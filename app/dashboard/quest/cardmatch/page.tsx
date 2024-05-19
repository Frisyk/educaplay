'use client'
import { useSession, SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import Loading from "../../loading";
import LevelList from "@/components/Games/ListLevel";
import { Nav } from "@/components/Games/Nav";


export default function CardSortPage() {
  const { data: session, status } = useSession()
  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    const rec = redirect('/redirect')    
    return rec
  }

  const levels = ["Common", "Rare", "Epic"];

    return (
      <main className="level-list font-bold text-2xl text-center text-blue-800">
      <Nav title="Card Match"/>
      <h1 className="my-10">Pilih Tingkat Kesulitan mu🔥</h1>
      <LevelList levels={levels}/>
      </main>
    )
  }
  