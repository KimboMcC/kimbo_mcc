import Image from 'next/image'
import Link from 'next/link'
import ProjSolo from './components/projSolo'
import { projectList } from './data/projectList'


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
      <Link href="/projects">Projects</Link>
        <ProjSolo key={projArray[0].id} title={projectList[projArray[0]].title} himg={projectList[projArray[0]].img[0]}/>
        <ProjSolo key={projArray[1].id} title={projectList[projArray[1]].title} himg={projectList[projArray[1]].img[0]}/>
        <ProjSolo key={projArray[2].id} title={projectList[projArray[2]].title} himg={projectList[projArray[2]].img[0]}/>
    </>
  );

}