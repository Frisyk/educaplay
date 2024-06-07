"use client"
import Link from "next/link";
import { ChevronLeftIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export function Nav({title} : {title: string}) {
    const route = useRouter()

    return(
        <nav className="flex items-center justify-between">
            <div onClick={() => route.back()} ><ChevronLeftIcon className="w-8 cursor-pointer" /></div>
            <h1 className="text-2xl font-bold bg-blue-200 p-1 px-3 rounded-xl">{title}</h1>
            <div><InformationCircleIcon className="w-8" /></div>
        </nav>
    )
}