import Link from 'next/link'

import MenuLogo from './MenuLogo'
function NavBar(props) {
    const menus = [{ text: "O nás", link: "#about" }, { text: "Inženýrská činnost", link: "#engineer" }, { text: "služby", link: "#services" }, { text: "Kontakt", link: "#contact" }]
    const menuList = menus.map(({ text, link }) => <Link key={link} href={`${link}`} >{text}</Link>)
    return (
        <nav className="absolute top-0 w-full bg-transparent border-gray-200 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <MenuLogo />

                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-6fault" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100   rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                        {menuList}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar