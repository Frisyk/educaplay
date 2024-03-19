import BottomNavigation from "@/components/BottomNav";
import Card from "@/components/Card";
import Image from "next/image";
import shalat from "@/public/pray.png"

export default function Home() {
  return (
    <main>
      <h1>Hai</h1>
      <Card nama="Shalat" gambar={shalat}/>
    </main>
  );
}
