import Image from "next/image";
import Heading from "./Heading";
import { projectList } from "../data/projectList";
import ProjSolo from "./ProjSolo";
import ContactLink from "./ContactLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export default function Project( props ) {
    const { aim, outcome, imgs, link  } = props
    
    return(
        <div className="2xl:px-64">
            <div className="py-28 px-5 md:px-12 md:w-4/5 xl:w-3/5 2xl:w-2/5">
                <div>
                    <h3 className="pb-4">The aim</h3>
                    <p>{aim}</p>
                </div>
                <div className="md:pt-24 pt-16 ">
                    <h3 className="pb-4">The outcome</h3>
                    <p>{outcome}</p>
                </div>
                <div className="flex pt-16">
                    <h4 className="underline">See for yourself</h4>
                    <FontAwesomeIcon className='pl-4' height={25} icon={faSquareArrowUpRight} />
                </div>
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