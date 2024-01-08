import Heading from "../../components/Heading";
import Project from "../../components/Project";
import { projectList } from "../../data/projectList"; 
import test from "../../05.jpg"
import ProjSolo from "../../components/ProjSolo";
import Footer from "@/app/components/Footer";
import { allProj } from "../../data/projectList";

export default function KartFest() {
    const num = 5
    let rNum = 3
    
    function random() {
        rNum = Math.floor(Math.random() * Object.keys(projectList).length)
        while(num ===rNum){
            rNum = Math.floor(Math.random() * Object.keys(projectList).length)
        }
    }
    random()
    
    return(
        <div className="relative top-20">
            <div className={"bg-[url('./data/peri/01.png')] bg-opacity-40 bg-center bg-cover py-40"}>
                    <div className="bg-white py-8 pl-5 mr-5 md:pl-12 w-fit pr-8">
                        <h1 className="pb-2">{projectList[num].title}</h1>
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
       
                <ProjSolo key={12} title="View more projects" slug='' src={allProj[2].img[0]}/>
            </div>
            <Footer/>
        </div>
    )
}