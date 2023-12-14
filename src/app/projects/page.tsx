import Link from "next/link"
import ProjSolo from "../components/projSolo"
import {projectList} from "@/app/data/projectList";

export default function Projects() {

//LINKED TO IMAGES 
    
    console.log(projectList.ALL.img)
    return(
        <>
            <div>
                <p>aa</p>
                <ProjSolo></ProjSolo>
                <ProjSolo></ProjSolo>
                
            </div>
        </>
    ) 
}