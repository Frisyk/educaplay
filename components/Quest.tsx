import task from "../public/task.png";
import card from "../public/cardmatch.png";
import sort from "../public/list.png";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface QuestItemProps {
  href: string;
  src: StaticImageData;
  alt: string;
  title: string;
}

const QuestItem: React.FC<QuestItemProps> = ({ href, src, alt, title }) => {
  return (
    <Link href={href} prefetch={false}>
      <div className="bg-blue-50 p-4 flex items-center outline text-blue-800 w-full md:w-[500px] rounded-lg md:p-10">
        <Image src={src} width={400} alt={alt} className="w-1/2 lg:w-20" />
        <h2 className="text-2xl font-bold my-4">{title}</h2>
      </div>
    </Link>
  );
};
export default function Quest() {
  const quests = [
    { href: "/dashboard/quest/assesmen", src: task, alt: "assesmen picture", title: "Assesment (Ujian)" },
    { href: "/dashboard/quest/cardmatch", src: card, alt: "card match picture", title: "Card Match" },
    { href: "/dashboard/quest/cardsort", src: sort, alt: "card sort picture", title: "Card Sort" }
  ];

  return (
    <main className="flex items-center flex-col gap-10 pb-20 text-center mt-5 w-full md:h-screen">
      {quests.map((quest, index) => (
        <QuestItem key={index} href={quest.href} src={quest.src} alt={quest.alt} title={quest.title} />
      ))}
    </main>
  );
}
