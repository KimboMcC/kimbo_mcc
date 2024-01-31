import ContactButton from "./ContactButton";
import Link from "next/link";

export default function ContactLink( props ) {

    return (
        <div className="my-28 md:px-12 px-5">
            <h3 className="mb-4 ">{props.h3}</h3>   
            <p className="mb-8">{props.p}</p>
            <Link href="/Contact" className="hover:underline"><ContactButton/></Link>
            
        </div>
    )
}