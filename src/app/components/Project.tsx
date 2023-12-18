import Image from "next/image";
import Heading from "./Heading";
import { projectList } from "../data/projectList";
import ProjSolo from "./ProjSolo";
import ContactLink from "./ContactLink";


export default function Project( props ) {
    const { title, h2, aim, outcome, imgs, test, slug, gallery, num } = props

    return(
        <div>
            <div>
                <Heading h1={title} h2={h2}/>
                <Image src={test} alt="project heading"/>
            </div>
            <div className="py-24 px-5">
                <div>
                    <h3 className="pb-8">The aim</h3>
                    <p>{aim}</p>
                </div>
                <div className="pt-16">
                    <h3 className="pb-8">The outcome</h3>
                    <p>{outcome}</p>
                </div>
            </div>
            <div>
                {imgs.map((img) => (
                    <ProjSolo gallery={'hidden'} src={img}/>
                ))}
            </div>
            <ContactLink h3='Let&apos;s talk!' p="Got an idea but no clue how to turn it into a reality?"/>
            
        </div>
    )
}