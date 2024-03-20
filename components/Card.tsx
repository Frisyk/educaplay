import Image, { StaticImageData } from "next/image";

interface CardProps {
  nama: string;
  gambar: StaticImageData;
}

const Card = ({ nama, gambar }: CardProps) => {
  return (
    <div className="bg-blue-500 flex items-end justify-between p-4 py-10 rounded-lg md:flex-col md:items-center md:w-fit md:p-10">
      <h2 className="text-2xl font-bold text-white">{nama}</h2>
      <Image src={gambar} alt={nama} />
    </div>
  );
};

export default Card;