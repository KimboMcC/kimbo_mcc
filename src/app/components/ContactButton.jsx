import Link from "next/link";

export default function ContactButton() {
    return(
        <p className="font-semibold"><Link href="/contact" className="hover:underline">Contact me</Link></p>
    )
}