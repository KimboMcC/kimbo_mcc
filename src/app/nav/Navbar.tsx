"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"


export default function Navbar() {
    const [ open, setOpen ] = useState(true)

    function toggleOpen() {
        setOpen(!open)
    }

    let visible = 'invisible'
    if (open) {
        visible = 'invisible'
    } else {
        visible = 'visible'
    }
    
    return(
        <div className="w-full items-center fixed z-20">
            <div className="flex py-5 px-5 justify-between bg-white">
                <p className="font-bold text-5xl"><Link href={'/'}>KIMBO</Link></p>
                <FontAwesomeIcon className="h-10 cursor-pointer" onClick={toggleOpen} icon={faBars}/>
            </div>
                <ul className={"py-24 px-5 bg-gray-100 w-full h-screen overflow-hidden " + visible }>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/projects'>Projects</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/cv'>CV</Link></li>
                </ul>
        </div>
    )
}   