'use client'
import { useSession, SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import { ListItems } from "@/components/Games/cardsort/ListItems";
import { Nav } from "../Nav";


export default function CardSort() {
  const { data: session, status } = useSession()


  if (status === "unauthenticated") {
    const rec = redirect('/redirect')    
    return rec
  }

  const levels = ["1", "2", "3"];

    return (
        <>
        <Nav title="Card Sort"/>
            <ListItems levels={levels}/>
            <ListItems levels={levels}/>
        </>
    )
  }
  