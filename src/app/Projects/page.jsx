import Link from "next/link"
import ProjSolo from "../components/ProjSolo"
import {projectList} from "@/app/data/projectList";
import Heading from "../components/Heading";
import ContactLink from "../components/ContactLink";
import Footer from "../components/Footer";



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
                    src={projectList[key].img[0]}
                />
            ))}
            <div className=""><ContactLink h3="Like what you see?" p="Let me help realise your business dreams"/></div>
            <Footer />
            </div>
    );
}


