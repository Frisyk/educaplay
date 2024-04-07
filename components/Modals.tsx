import Link from "next/link";
import { materi } from "./data";

interface ModalProps {
    link: string;
    onClose: () => void;
  }

  interface ListProps {
    title: string;
    link: number
  }
  
export default function Modal({ link, onClose }: ModalProps) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            {
                materi.map((mtr, index) => {
                    return (
                        <ListMateri key={mtr.id} title={mtr.title} link={index} />
                    )
                })
            }
            <div className="flex justify-center mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

function ListMateri({title, link}: ListProps) {
    return(
        <Link href={`/dashboard/materi/${link}`} className="">
            <h1 className="p-3 mb-1 bg-blue-500 text-white">{title}</h1>
        </Link>
    )
}