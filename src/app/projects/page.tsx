import Link from "next/link"
import ProjSolo from "../components/projSolo"
import {projectList} from "@/app/data/projectList";
import Heading from "../components/heading";



export default function Projects() {
    // Assuming projectList is an array of objects containing project information


    return (
        <div>
            <p>aa</p>
            {Object.keys(projectList).map((key) => (
                <ProjSolo
                    key={key} // Assign a unique key for each element
                    title={projectList[key].title}
                    h2={projectList[key].h2}
                    himg={projectList[key].img[0]}
                />
            ))}
        </div>
    );
}


