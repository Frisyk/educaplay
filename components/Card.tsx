import Image from "next/image";

const Card = ({ nama, gambar }) => {
  return (
    <div className="bg-blue-500 flex items-end justify-between p-4 py-10 rounded-lg">
      <h2 className="text-2xl font-bold text-white">{nama}</h2>
      <Image src={gambar} alt={nama} />
    </div>
  );
};

export default Card;