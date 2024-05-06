"use client";

import { getUsers, handleDelete } from "@/lib/action";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const ButtonDelete = ({id}: {id: string}) => {
  const router = useRouter()
  return (
    <button onClick={() => {
        handleDelete(id)
        router.push('/admin')
      }
    } className='w-full'>
      <TrashIcon className="w-20"/>
    </button>
  );
};

export default ButtonDelete;