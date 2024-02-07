import Image from "next/image";
import Heading from "./Heading";
import { projectList } from "../data/projectList";
import ProjSolo from "./ProjSolo";
import ContactLink from "./ContactLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Project( props ) {
    const { aim, outcome, imgs, link  } = props
    
    return(
        <div className="2xl:px-64">
            <div className="py-28 px-5 md:px-12 md:w-4/5 xl:w-3/5 2xl:2/5">
                <div>
                    <h3 className="pb-4">The aim</h3>
                    <p>{aim}</p>
                </div>
                <div className="md:pt-24 pt-16 ">
                    <h3 className="pb-4">The outcome</h3>
                    <p>{outcome}</p>
                </div>
                {props.link ? (
                    <Link target="blank" href={link}>
                        <div className="flex items-center gap-2 anime pt-16 anime"> ///MAKE TEXT ALL GREY TO MATCH OTHER TEXT. SET LINKS UP IN OTHER RELEVANT PROJECTS.
                            <FontAwesomeIcon className='pr-2' height={25} icon={faSquareArrowUpRight} />
                            <h4 className="">See for yourself</h4>
                        </div>
                    </Link>
                ): <div></div>}
            </div>
                <div className="">
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