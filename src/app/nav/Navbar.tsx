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
        <div className={"items-center fixed z-20 w-full bg-[#fff]"}>
            <div className={"flex py-5 px-5 justify-between "} >
                <p className="font-bold text-[#333] text-5xl"><Link href={'/'}>KIMBO</Link></p>
                <div id="nav-icon3" onClick={toggleOpen} className={open ? '' : 'open'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={"py-14 px-5 z-18 drop-shadow-xl bg-[#fff] w-full " + visible} >
                <li><Link href='/' onClick={toggleOpen}>Projects</Link></li>
                <li><Link href='/Contact'  onClick={toggleOpen}>Contact</Link></li>
            </ul>
        </div>
    )
}   

/*
<FontAwesomeIcon className="h-10 cursor-pointer" onClick={toggleOpen} icon={open ? faBars : faXmark}/>
*/