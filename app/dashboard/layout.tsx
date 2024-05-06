"use client"

import BottomNavigation from '@/components/BottomNav';
import { usePathname } from 'next/navigation';  
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const showBottomNavigationPages = [
    '/dashboard',
    '/dashboard/quest',
    '/dashboard/profile',
  ];

  const shouldShowBottomNavigation = showBottomNavigationPages.includes(pathname);

  return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        {shouldShowBottomNavigation && <BottomNavigation /> }
      </div>
  );
}