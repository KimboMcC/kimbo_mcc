import Link from "next/link"
import ProjSolo from "../components/Projsolo"
import {projectList} from "@/app/data/projectList";
import Heading from "../components/Heading";
import ContactLink from "../components/ContactLink";
import Footer from "../components/Footer";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects',
  description: '...', ///what write here? add Metadata to all PAGES! Why work on page.tsx but not layout.tsx? 
}
    
// HOVER STATE FOR GALLERY IMAGES. MAKE IT POP UP TO THE RIGHT N LEAVE A BLACK CLONE IN ITS PLACE. UNO WHAT I MEAN ;)


////GET IMAGES WORKING NEXT, GOT LOADS OF STUFF ON HDD @HOME SO SIFT THRU AND SEE WHAT YOU CAN MAKE. REMEMBER NOT TO GET LOST IN ABSOLUTE
////PERFECTION. I WANT IT TO BE NICE BUT IMPORTANTLY IT NEEDS TO WORK. THE QUICKER I HAVE IT WORKING THE QUICKER I CAN USE IT,
////I CAN ALWAYS MAKE ADJUSTMENTS LATER IF WANTED. PRIORITY IS GETTING IT OOT.

export default function Projects() {

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


