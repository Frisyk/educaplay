'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Post } from "@prisma/client";

interface ModalProps {
  link: string;
  onClose: () => void;
  materi: Post[];
}

interface ListProps {
  title: string | null;
  link: number;
  visited: boolean;
  markVisited: any
}

export default function Modal({ materi, link, onClose }: ModalProps) {
  const [visitedLinks, setVisitedLinks] = useState<number[]>([]);

  const markVisited = (index: number) => {
    setVisitedLinks((prevVisited) => [...prevVisited, index]);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          {materi.map((mtr, index) => {
            const isVisited = visitedLinks.includes(index);
            
            return (
              <ListMateri
                key={mtr.id}
                title={mtr.title}
                link={index}
                visited={isVisited}
                markVisited={markVisited}
              />
            );
          })}
          <div className="flex justify-center mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Semangat!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListMateri({ title, link, visited, markVisited }: ListProps) {
  const handleClick = () => {
    markVisited(link);
  };
  const pathname = usePathname();
  const isCurrentPath = pathname === `/dashboard/materi/${link}`;

  const itemClasses = clsx('block', 'p-3', 'mb-1', {
    'bg-gray-400': visited,
    'bg-blue-300': !visited && !isCurrentPath,
    'bg-blue-500': isCurrentPath,
  });

  return (
    <Link href={`/dashboard/materi/${link}`}
      
        onClick={handleClick}
        className={itemClasses}>
      
        {title}
    
    </Link>
  );
}
