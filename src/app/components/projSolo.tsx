import Image from "next/image"
import test from './05.jpg'

export default function ProjSolo( props ) {
    const { title, h2, aim, outcome, himg } = props

    return(
        <div className="relative h-64">
            <Image
                className="-skew-y-6 z-10"
                src={himg}
                alt="Picture of work"
            />
            <p className="bg-gray-100 absolute bottom-12 left-5 px-6 py-2 z-10 text-gray-900 text-lg">{title}</p>
        </div>
       
    )
}

/*
<div class="relative overflow-hidden">
  <div class="absolute inset-0 bg-blue-500 transform -rotate-45 origin-left"></div>
</div>
*/