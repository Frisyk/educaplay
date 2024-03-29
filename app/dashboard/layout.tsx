'use client'
import BottomNavigation from '@/components/BottomNav';
// import { NextAuthProvider } from '@/components/Provider';
import { useSession, getSession, SessionProvider } from "next-auth/react"
  

 
export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
  return (
    <SessionProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        <BottomNavigation />
      </div>
    </SessionProvider>
  );
}