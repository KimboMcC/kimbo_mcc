import Link from "next/link";

export default function Button( props: any ) {
    const { title, slug, gallery } = props

    let projects = ''
     if (slug === 'projects') {
        projects = '/projects'    
    } else {
        projects = `/Projects/${slug}`
    }

    return (
        <>
            <p><Link className={"bg-white absolute bottom-12 left-5 px-4 py-3 rounded-sm z-10 " + gallery} href={projects}>{title}</Link></p>
        </>
    )
}