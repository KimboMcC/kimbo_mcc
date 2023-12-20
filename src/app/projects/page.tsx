import Link from "next/link"
import ProjSolo from "../components/ProjSolo"
import {projectList} from "@/app/data/projectList";
import Heading from "../components/Heading";
import ContactLink from "../components/ContactLink";
import Footer from "../components/Footer";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects',
  description: '...', ///what write here? add Metadata to all PAGES! Why work on page.tsx but not layout.tsx? 
}
    

export default function Projects() {
    // Assuming projectList is an array of objects containing project information


    return (
        <div>
            <Heading h1="All projects" h2="Click on a project to learn more"/>
            {Object.keys(projectList).map((key) => (
                <ProjSolo
                    key={key} // Assign a unique key for each element
                    title={projectList[key].title}
                    slug={projectList[key].slug}
                    h2={projectList[key].h2}
                    himg={projectList[key].img[0]}
                />
            ))}
            <div className=""><ContactLink h3="Like what you see?" p="Let me help realise your business dreams"/></div>
            <Footer />
            </div>
    );
}


