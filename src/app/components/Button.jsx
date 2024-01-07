
import Link from "next/link";

export default function Button( props ) {
    const { title, slug, gallery, animate } = props

    let projects = ''
     if (slug) {
        projects = `/Projects/${slug}`   
    } else {
        projects = `/`
    }


    return (
        <div className="bg-black">
            <p className={"bg-black absolute bottom-12 left-5 px-4 py-3 opacity-50 rounded-sm z-10 " + gallery} aria-hidden='true'>{title}</p>
            <p className="hover:underline"><Link className={"bg-white absolute bottom-12 left-5 px-4 py-3 rounded-sm z-10 " + gallery + ' ' + animate} href={projects}>{title}</Link></p>
        </div>
    )
}