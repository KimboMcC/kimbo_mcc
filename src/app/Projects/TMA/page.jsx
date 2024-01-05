// @ts-nocheck

import Heading from "../../components/Heading";
import Project from "../../components/Project";
import { projectList } from "../../data/projectList"; 
import test from "../../05.jpg"
import ProjSolo from "../../components/ProjSolo";

export default function TMA() {
    const num = 1
    let rNum = 1
    
    function random() {
        rNum = Math.floor(Math.random() * Object.keys(projectList).length)
        while(num ===rNum){
            rNum = Math.floor(Math.random() * Object.keys(projectList).length)
        }
    }
    random()
    
    return(
        <div className="">
            <div className={"bg-[url('./05.jpg')] bg-bottom bg-cover pt-40 pb-24 pr-5"}>
                <div className="bg-white py-8 pl-5">
                    <h1 className="pb-6">{projectList[num].title}</h1>
                    <h2>{projectList[num].h2}</h2>
                </div>
            </div>
            <Project 
                title={projectList[num].title} 
                h1={projectList[num].title} 
                h2={projectList[num].h2}
                test={test}
                aim={projectList[num].aim}
                outcome={projectList[num].outcome}
                imgs={projectList[num].img}
                imgString='../components/05.jpg'
            />
            <div>
                <ProjSolo key={projectList[rNum].id} title={projectList[rNum].title} slug={projectList[rNum].slug} himg={projectList[rNum].img[0]}/>
                <ProjSolo key={12} title="View all projects" slug='' himg={projectList[2].img[0]}/>
            </div>
        </div>
    )
}