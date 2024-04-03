import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  nama: string;
  gambar: StaticImageData;
  bab: string
  id: number
}

const Card = ({ nama, gambar, bab, id }: CardProps) => {
  return (
    <Link href={`/materi/${id}`}>
    <div  className="bg-blue-500 p-4 py-10 my-5 rounded-lg  md:w-fit md:p-10">
      <h1 className="uppercase font-bold text-sm text-yellow-200">Bab {bab}</h1>
      <div className="flex items-end justify-between md:flex-col md:items-center">
        <h2 className="text-2xl font-bold text-white">{nama}</h2>
        <Image src={gambar} alt={nama} />
      </div>
    </div>
    </Link>
  );
};

export default Card;