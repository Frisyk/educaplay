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
    { href: "/dashboard/quest", label: "Quest", icon: AcademicCapIcon },
    { href: "/dashboard/profile", label: "Profil", icon:  UserCircleIcon },
  ];

const BottomNavigation = () => {
  const pathname = usePathname();


  return (
    <nav className="bottom-navigation flex w-full p-3 rounded-lg justify-evenly bg-white items-center fixed bottom-0">
      {navigationItems.map((item) => {
        const LinkIcon = item.icon
        return (
            <Link 
                key={item.href} 
                href={item.href} 
                className={clsx(
                    'flex grow items-center rounded-md justify-center gap-2 bg-gray-50 p-5 text-sm font-medium text-blue-400 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-4 md:px-5',
                    {
                      'bg-sky-100 text-blue-600 font-bold': pathname === item.href,
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
