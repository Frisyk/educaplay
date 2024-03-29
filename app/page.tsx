import BottomNavigation from "@/components/BottomNav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center flex-col justify-center">
      <h1>Hai</h1>
      <Link className="p-5 bg-blue-800 text-white" href={"/api/auth/signin"}>
        Login
      </Link>
    </main>
  );
}


