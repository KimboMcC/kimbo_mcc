

import Image from "next/image"
import test from './05.jpg'
import Button from "./Button"


export default function ProjSolo( props ) {
    const { title, h2, aim, outcome, src, slug, gallery } = props

    const visibleBut = 'block'
    if (gallery === true) {
        const visibleBut = 'hidden'
    }

    return(
        <div className="relative h-70">
            <Image
                className="z-10"
                src={src}
                alt="Picture of work"
            />
            <Button gallery={gallery} title={title} slug={slug}/>
        </div>
       
    )
}

/*
<div class="relative overflow-hidden">
  <div class="absolute inset-0 bg-blue-500 transform -rotate-45 origin-left"></div>
</div>
*/