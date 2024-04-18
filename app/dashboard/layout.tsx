'use client'
import BottomNavigation from '@/components/BottomNav';
import TopNavigation from '@/components/TopNav';
import { useSession, getSession, SessionProvider } from "next-auth/react"
import { redirect, usePathname, useSearchParams } from 'next/navigation';  
import Loading from './loading';
import {useRouter} from 'next/router'; 


 
export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  

  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    const rec = redirect('/')
    alert("Access Denied, Please Login First")
    return rec
  }

  const showBottomNavigationPages = [
    '/dashboard',
    '/dashboard/games',
    '/dashboard/profile',
    // Add more page paths as needed
  ];

  const shouldShowBottomNavigation = showBottomNavigationPages.includes(pathname);

  return (
    <SessionProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        {shouldShowBottomNavigation && <BottomNavigation /> }
      </div>
    </SessionProvider>
  );
}