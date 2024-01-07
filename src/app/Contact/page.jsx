import { faEnvelope, faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Heading from "../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjSolo from "../components/ProjSolo";
import { projectList } from "../data/projectList";
import Footer from "../components/Footer";
import { allProj } from "../data/projectList";
import Link from "next/link";

export default function Contact() {

    const projArray = []
  
    function randomProj() {
      const projLength =  Object.keys(projectList).length
      
      while (projArray.length < 3) {
        let a = Math.floor(Math.random() * projLength)
  
        if (!projArray.includes(a)){
          projArray.push(a)
        }
      }
  
    }
  
    randomProj()

    return(
        <div>
            <Heading h1="Don't be a stranger" h2="Got something you wanted to talk about? Feel free to get in-touch and I’ll get back to you ASAP."/>
                <div className="flex flex-col gap-8 pl-5 pb-24">  
                    <div className="mb-2">  
                        <div className="inline-flex items-center pb-2 text-[#333]">
                            <FontAwesomeIcon className="h-9 pr-2 text-[#333]" icon={faEnvelope}/>
                            <h3>kimmccdesign@gmail.com</h3>
                        </div>
                    </div> 
                    <div>
                        <Link className="inline-flex pb-4 text-[#333]" href="https://www.linkedin.com/in/kim-mccauley-974881208/" >
                            <FontAwesomeIcon className="h-9 pr-2" icon={faLinkedin}/>
                            <h3 className="underline">LinkedIn</h3>
                       
                        </Link>
                        
                    </div>
                </div>
                <div className="mb-24">
                <ProjSolo key={projectList[0].id} title={projectList[0].title} slug={projectList[0].slug} src={projectList[0].img[0]}/>
                <ProjSolo key={projectList[2].id} title={projectList[2].title} slug={projectList[2].slug} src={projectList[2].img[0]}/>
                <ProjSolo key={12} title="View all projects" slug="Projects" src={allProj[2].img[0]}/>
                </div>
                <Footer/>
        </div>
    )
}