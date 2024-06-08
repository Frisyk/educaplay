import Link from "next/link";
import { ChevronLeftIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function Nav({title, link} : {title: string, link: string}) {

    return(
        <nav className="flex items-center justify-between mb-10">
            <Link href={link} ><ChevronLeftIcon className="w-8 cursor-pointer" /></Link>
            <h1 className="text-2xl font-bold bg-blue-200 p-1 px-3 rounded-xl">{title}</h1>
            <div><InformationCircleIcon className="w-8" /></div>
        </nav>
    )
}