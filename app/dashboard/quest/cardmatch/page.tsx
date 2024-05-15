'use client'
import GamesCard from "@/components/Games/GamesCard";
import { useSession, SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import Loading from "../../loading";
import LevelList from "@/components/Games/ListLevel";

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
      <LevelList levels={levels}/>
    )
  }
  