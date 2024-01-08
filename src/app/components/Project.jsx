import Image from "next/image";
import Heading from "./Heading";
import { projectList } from "../data/projectList";
import ProjSolo from "./ProjSolo";
import ContactLink from "./ContactLink";


export default function Project( props ) {
    const { title, h2, aim, outcome, imgs, test, slug, gallery, num, imgString } = props

    
    return(
        <div>
            <div className="py-28 px-5 md:px-12 md:w-4/5 xl:w-3/5">
                <div>
                    <h3 className="pb-4">The aim</h3>
                    <p>{aim}</p>
                </div>
                <div className="md:pt-24 pt-16 ">
                    <h3 className="pb-4">The outcome</h3>
                    <p>{outcome}</p>
                </div>
            </div>
            <div>
                {imgs.map((img) => (
                    <Image
                    className="z-10"
                    src={img}
                    key={1}
                    alt="Picture of work"
                    />
                ))}
            </div>
            <ContactLink h3='Let&apos;s talk!' p="Got an idea but no clue how to turn it into a reality?"/>
        </div>
    )
}
/*
<Image className="relative top-0" src={test} alt='' />
*/