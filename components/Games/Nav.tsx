import Link from "next/link";
import { BackspaceIcon, ChevronLeftIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function Nav({title} : {title: string}) {
    return(
        <nav className="flex items-center justify-between">
            <Link href="/dashboard/quest"><ChevronLeftIcon className="w-8" /></Link>
            <h1 className="text-2xl font-bold bg-blue-200 p-1 px-3 rounded-xl">{title}</h1>
            <div><InformationCircleIcon className="w-8" /></div>
        </nav>
    )
}