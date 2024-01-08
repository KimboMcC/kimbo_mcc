'use client'

import Image from "next/image"
import test from './05.jpg'
import Button from "./Button"
import Link from "next/link"
import { useState } from "react"

export default function ProjSolo( props ) {
    const { title, h2, aim, outcome, src, slug, gallery } = props
    const [ isHovered, setIsHovered ] = useState(false)
    let projects = ''

    const visibleBut = 'block'
    if (gallery === true) {
        const visibleBut = 'hidden'
    }

    if (slug) {
        projects = `/Projects/${slug}`
    } else {
        projects = `/`
    }

    const handleMouseOver = () => {
        setIsHovered(true);
      };
    
    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return(
        <Link href={projects}>
        <div className="relative h-70 " onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
            
                <Image
                    className="z-10"
                    src={src}
                    alt="Picture of work"
                />
                <Button gallery={gallery} title={title} slug={slug} animate={isHovered ? 'buttonanimate' : 'smile'}/>
        </div>
        </Link>
    )
}

/*
<div class="relative overflow-hidden">
  <div class="absolute inset-0 bg-blue-500 transform -rotate-45 origin-left"></div>
</div>

*/