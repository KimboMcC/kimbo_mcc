import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Heading from "../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjSolo from "../components/Projsolo";
import { projectList } from "../data/projectList";
import Footer from "../components/Footer";

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
                    <div className="mb-8">  
                        <div className="inline-flex pb-4 text-[#333]">
                            <FontAwesomeIcon className="h-10 pr-2 text-[#333]" icon={faEnvelope}/>
                            <h3>Email</h3>
                        </div>
                        <p>kimmccdesign@gmail.com</p>
                    </div> 
                    <div>
                        <div className="inline-flex pb-4 text-[#333]">
                            <FontAwesomeIcon className="h-10 pr-2" icon={faLinkedin}/>
                            <h3>LinkedIn</h3>
                        </div>
                        <p>https:kimmcc.linkedIn</p>
                    </div>
                </div>
                <div className="mb-24">
                    <ProjSolo key={projArray[0].id} title={projectList[projArray[0]].title} slug={projectList[projArray[0]].slug} himg={projectList[projArray[0]].img[0]}/>
                    <ProjSolo key={projArray[1].id} title={projectList[projArray[1]].title} slug={projectList[projArray[1]].slug} himg={projectList[projArray[1]].img[0]}/>
                    <ProjSolo key={projArray[2].id} title={projectList[projArray[2]].title} slug={projectList[projArray[2]].slug} himg={projectList[projArray[2]].img[0]}/>
                    <ProjSolo key={12} title="View all projects" slug="Projects" himg={projectList[projArray[2]].img[0]}/>
                </div>
                <Footer/>
        </div>
    )
}