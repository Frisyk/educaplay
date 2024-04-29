import Profile from "@/components/Profile";
import { getUserByEmail } from "@/lib/data";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Profile",
  description: 'Profile aplikasi belajar PAI interaktif tentang shalat.',
};


export default function ProfilePage() {
  
  return (
      <>
        <Profile/>
      
      </>
      
    );
  }