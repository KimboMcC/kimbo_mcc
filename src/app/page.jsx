import Image from 'next/image'
import Link from 'next/link'
import ProjSolo from './components/ProjSolo'
import { projectList } from './data/projectList'
import Heading from './components/Heading'
import ContactLink from './components/ContactLink'
import Footer from './components/Footer'
import { allProj } from './data/projectList'


export default function Home() {

  return (
    <div className='relative top-20'>
      {Object.keys(projectList).map((key) => (
                <ProjSolo
                    key={key} // Assign a unique key for each element
                    title={projectList[key].title}
                    slug={projectList[key].slug}
                    h2={projectList[key].h2}
                    src={projectList[key].img[0]}
                />
            ))}
      <ContactLink h3={'Get in touch'} p={'Have something in mind? Drop me a line and I’ll get back to you ASAP.'}/>
      <Footer />
    </div>
  );
}
