
import Link from "next/link";

export default function Button( props ) {
    const { title, gallery, animate } = props

    return (
        <div className="bg-black">
            <p className={"bg-black absolute bottom-12 left-5 md:left-12 px-4 py-3 opacity-50 rounded-sm z-10 " + gallery} aria-hidden='true'>{title}</p>
            <p className={"bg-white absolute bottom-12 left-5 md:left-12 px-4 py-3 rounded-sm z-10 " + gallery + ' ' + animate}>{title}</p>
        </div>
    )
}