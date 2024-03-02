"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import MenuLogo from './MenuLogo'
function NavBar(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const menus = [{ text: "O nás", link: "#about" }, { text: "Inženýrská činnost", link: "#engineer" }, { text: "služby", link: "#services" }, { text: "Kontakt", link: "#contact" }]
    const menuList = menus.map(({ text, link }) => <Link key={link} className="text-white p-5 md:p-1 text-4xl md:text-base" href={`${link}`} >{text}</Link>)
    useEffect(() => {
        function closeMenu(e) {
            if (e.target.id !== "menu" && e.target.id !== "menuToggle")
                setMenuOpen(false)
        }
        window.addEventListener('click', closeMenu)
        return window.removeEventListener('click', closeMenu)
    }, [])

    return (
        <nav className="absolute top-0 w-full bg-transparent border-gray-200 z-10 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <MenuLogo />

                </a>
                <button id="menuToggle" data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-6fault" aria-expanded="false" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 pointer-events-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="menu" className={`${menuOpen ? "flex" : "hidden"} w-full  justify-center items-center md:block md:w-auto " id="navbar-default`}>
                    <div className="bg-black md:bg-transparent font-medium flex  items-center text-white flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        {menuList}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar