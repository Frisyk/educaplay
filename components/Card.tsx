import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  nama: string;
  gambar: StaticImageData;
  bab: number
  id: number
}

const Card = ({ nama, gambar, bab, id }: CardProps) => {
  return (
    <Link href={`/dashboard/materi/${id}`}>
    <div  className="bg-blue-500 p-4 py-10 my-5 rounded-lg  md:w-fit md:p-10">
      <h1 className="uppercase font-bold text-sm text-yellow-200 bg-blue-700 w-fit p-2 rounded-md mb-2">Part {bab}</h1>
      <div className="flex items-center justify-between md:flex-col md:items-center">
        <h2 className="text-xl font-semibold leading-8 text-white">{nama}</h2>
        <Image src={gambar} alt={nama} width={100} />
      </div>
    </div>
    </Link>
  );
};

export default Card;