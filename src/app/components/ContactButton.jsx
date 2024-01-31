import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactButton() {


    return(
        <div className="flex items-center gap-2 anime w-3/5">
            <FontAwesomeIcon className="h-6" icon={faSquareArrowUpRight}/>
            <p className="font-semibold">Contact me</p>
        </div>
    )
}