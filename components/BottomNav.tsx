'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

import {
     UserCircleIcon,
    HomeIcon,
    AcademicCapIcon,
  } from '@heroicons/react/24/outline';

  const navigationItems = [
    { href: "/dashboard", label: "Home", icon: HomeIcon },
    { href: "/dashboard/games", label: "Games", icon: AcademicCapIcon },
    { href: "/dashboard/profile", label: "Profil", icon:  UserCircleIcon },
  ];

const BottomNavigation = () => {
  const pathname = usePathname();


  return (
    <nav className="bottom-navigation flex w-full justify-evenly fixed bottom-0">
      {navigationItems.map((item) => {
        const LinkIcon = item.icon
        return (
            <Link 
                key={item.href} 
                href={item.href} 
                className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-sky-100 text-blue-600': pathname === item.href,
                    },
                  )}    
            >
               <LinkIcon className="w-6" />
            <span>{item.label}</span>
          </Link>
        )
      }
     )}
    </nav>
  );
};

export default BottomNavigation;
