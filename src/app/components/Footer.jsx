import Link from "next/link"

export default function Footer() {

    return(
        <div className="px-5 pb-8">
            <div className="h-0.5 opacity-50 mb-4 w-full bg-black"></div>
            <div className="inline-flex justify-between w-full">
            <p className="text-gray-800 pt-4">Kimbo McC</p>
            <p className="pt-4 my-auto">:)</p>
            </div>
        </div>
    )
}