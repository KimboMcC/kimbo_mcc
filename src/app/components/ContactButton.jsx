import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ContactButton() {


    return(
        <div className="flex items-center gap-2 anime w-1/5">
            <FontAwesomeIcon className="h-6" icon={faSquareArrowUpRight}/>
            <p className="font-semibold"><Link href="/Contact" className="hover:underline">Contact me</Link></p>
        </div>
    )
}