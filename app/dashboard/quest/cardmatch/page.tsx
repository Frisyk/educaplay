'use client'
import GamesCard from "@/components/Games/Cards";
import { useSession, SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import Loading from "../../loading";

export default function CardSortPage() {
  const { data: session, status } = useSession()
  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    const rec = redirect('/redirect')    
    return rec
  }

    return (
      <div>
        <GamesCard />
      </div>
    )
  }
  