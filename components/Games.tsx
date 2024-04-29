import Image from "next/image";
import Link from "next/link";
import task from "../public/task.png"
import card from "../public/cardmatch.png"

export default function Games() {
    return (
      <main className="flex flex-col gap-10 pb-20  text-center  mt-5 w-full md:h-screen">
        <Link href={"/dashboard/quest/assesmen"} prefetch={false}>
            <div  className="bg-blue-50 p-4 flex items-center outline text-blue-800 w-full rounded-lg md:p-10">
              <Image
                src={task}
                width={400}
                alt="assesmen picture"
                className="w-1/2"
              />
                <h2 className="text-3xl font-bold my-4">Assesmen <br />(Ujian)</h2>
            </div>
        </Link>
        <Link href={"/dashboard/quest/cardmatch"} prefetch={false}>
            <div  className="bg-blue-50 p-4 flex items-center outline text-blue-800 w-full rounded-lg md:p-10">
                <Image
                    src={card}
                    width={400}
                    alt="assesmen picture"
                    className="w-1/2"
                  />
                <h2 className="text-4xl my-4 font-bold ">Card Match</h2>
            </div>
        </Link>
      </main>
    );
  }