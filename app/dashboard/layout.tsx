'use client'
import BottomNavigation from '@/components/BottomNav';
import TopNavigation from '@/components/TopNav';
import { useSession, getSession, SessionProvider } from "next-auth/react"
import { redirect } from 'next/navigation';  
import Loading from './loading';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    const rec = redirect('/')
    alert("Access Denied, Please Login First")
    return rec
  }
  return (
    <SessionProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <TopNavigation/>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        <BottomNavigation />
      </div>
    </SessionProvider>
  );
}