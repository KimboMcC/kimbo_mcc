// @ts-nocheck

import Image from 'next/image'
import Link from 'next/link'
import ProjSolo from './components/ProjSolo'
import { projectList } from './data/projectList'
import Heading from './components/Heading'
import ContactLink from './components/ContactLink'
import Footer from './components/Footer'

export default function Home() {

  return (
    <>
      <Heading h1={'Kimbo McC'} h2={'Graphic/digital design & Web-development specialist'}/>
      <ProjSolo key={projectList[0].id} title={projectList[0].title} slug={projectList[0].slug} src={projectList[0].img[0]}/>
      <ProjSolo key={projectList[1].id} title={projectList[1].title} slug={projectList[1].slug} src={projectList[1].img[0]}/>
      <ProjSolo key={projectList[5].id} title={projectList[5].title} slug={projectList[5].slug} src={projectList[5].img[0]}/>
      <ProjSolo key={12} title="View all projects" slug='' src={projectList[0].img[0]}/>
      <ContactLink h3={'Get in touch'} p={'Have something in mind? Drop me a line and I’ll get back to you ASAP.'}/>
      <Footer />
    </>
  );
}
