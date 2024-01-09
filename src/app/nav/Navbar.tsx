"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"
import favicon from '../favicon.ico'
import Image from "next/image"

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
        <>
            <div className={"items-center fixed z-20 w-full md:hidden bg-[#fff]"}>
                <div className={"flex py-5 px-5 justify-between items-center"} >
                    <Link href={'/'}><Image alt='Kim Logo' width={110} src={favicon} /></Link>
                    <div id="nav-icon3" onClick={toggleOpen} className={open ? '' : 'open'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={"py-14 px-5 z-18 mob drop-shadow-xl bg-[#fff] w-full " + visible} >
                    <li><Link href='/' onClick={toggleOpen}>Projects</Link></li>
                    <li><Link href='/Contact'  onClick={toggleOpen}>Contact</Link></li>
                </ul>
            </div>
            
            <div className="bg-[#fff] fixed w-full z-20 ">
                <div className={"py-6 px-12 hidden md:flex justify-between"} >
                    <Link href={'/'}><Image alt='Kim Logo' height={70}  src={favicon} /></Link>
                    <ul className={"bg-[#fff] flex items-end gap-16"} >
                        <li className="font-medium text-[#333] hover:text-black text-xl"><Link href='/' onClick={toggleOpen}>Projects</Link></li>
                        <li className="font-medium text-[#333] hover:text-black text-xl"><Link href='/Contact'  onClick={toggleOpen}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}   

//PROJECT DROP-DOWN WHEN HOVERING?? COUL BE A NICE ADDITION. RELATIVELY SIMPLE AS WELL.