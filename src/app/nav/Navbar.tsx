"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"


export default function Navbar() {
    const [ open, setOpen ] = useState(true)

    function toggleOpen() {
        setOpen(!open)
    }

    let visible = 'hidden'
    if (open) {
        visible = 'hidden'
    } else {
        visible = 'block'
    }
    
    return(
        <div className="items-center fixed z-20 w-full">
            <div className="flex py-5 px-5 justify-between bg-white">
                <p className="font-bold text-5xl"><Link href={'/'}>KIMBO</Link></p>
                <FontAwesomeIcon className="h-10 cursor-pointer" onClick={toggleOpen} icon={open ? faBars : faXmark}/>
            </div>
            <ul className={"py-24 px-5 bg-gray-100 w-full " + visible }>
                    <li onClick={toggleOpen} className=""><Link href='/Projects'>Projects</Link></li>
                    <li onClick={toggleOpen}><Link href='/Contact'>Contact</Link></li>
                    <li onClick={toggleOpen}><Link href='/CV'>CV</Link></li>
                    <li onClick={toggleOpen}><Link href='/'>Home</Link></li>
            </ul>
        </div>
    )
}   