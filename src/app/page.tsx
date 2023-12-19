import Image from 'next/image'
import Link from 'next/link'
import ProjSolo from './components/ProjSolo'
import { projectList } from './data/projectList'
import Heading from './components/Heading'
import ContactLink from './components/ContactLink'

export default function Home() {
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

  return (
    <>
      <Heading h1={'Kimbo McC'} h2={'Graphic/digital design & Web-development specialist'}/>
      <ProjSolo key={projArray[0].id} title={projectList[projArray[0]].title} slug={projectList[projArray[0]].slug} himg={projectList[projArray[0]].img[0]}/>
      <ProjSolo key={projArray[1].id} title={projectList[projArray[1]].title} slug={projectList[projArray[1]].slug} himg={projectList[projArray[1]].img[0]}/>
      <ProjSolo key={projArray[2].id} title={projectList[projArray[2]].title} slug={projectList[projArray[2]].slug} himg={projectList[projArray[2]].img[0]}/>
      <ProjSolo key={12} title="View all projects" slug='' himg={projectList[projArray[2]].img[0]}/>
      <ContactLink h3={'Get in touch'} p={'Have something in mind? Drop me a line and I’ll get back to you ASAP.'}/>

    </>
  );
}
