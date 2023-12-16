import Image from "next/image"
import test from './05.jpg'
import Button from "./Button"

export default function ProjSolo( props ) {
    const { title, h2, aim, outcome, himg, slug } = props

    return(
        <div className="relative h-64">
            <Image
                className="-skew-y-6 z-10"
                src={test}
                alt="Picture of work"
            />
            <Button title={title} slug={slug}/>
        </div>
       
    )
}

/*
<div class="relative overflow-hidden">
  <div class="absolute inset-0 bg-blue-500 transform -rotate-45 origin-left"></div>
</div>


*/