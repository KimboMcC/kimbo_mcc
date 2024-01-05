import Link from "next/link";

export default function ContactButton() {
    return(
        <p className="font-semibold"><Link href="/Contact" className="hover:underline">Contact me</Link></p>
    )
}