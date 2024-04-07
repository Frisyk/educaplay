import Profile from "@/components/Profile";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Profile",
  description: 'Profile aplikasi belajar PAI interaktif tentang shalat.',
};


export default function ProfilePage() {
    return (
      <Profile/>
      
    );
  }