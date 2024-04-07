'use client'
import Link from "next/link";
import { useSession, getSession, SessionProvider } from "next-auth/react"


export default function TopNavigation () {
    const { data: session, status } = useSession()
    return(
        <nav className="top-0 w-full p-5 fixed right-0 z-20 bg-blue-600 text-white flex justify-between">
            <Link href={'/'}><h1>EducaPlay</h1></Link>
            <p className="capitalize">Hi, {session?.user?.name}!</p>
        </nav>
    )
}