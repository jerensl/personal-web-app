import React from 'react'
import Notifications from './Notifications'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faAddressCard,
    faFileCode,
    faCopy,
} from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'
import { StandardLink } from './links/StandardLink'

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full z-10 bg-white dark:bg-neutral-900 px-5vw">
            <div className="flex text-center justify-between border-b-2 h-full w-full border-gray-100">
                <StandardLink
                    href="/"
                    className="font-semibold m-0 text-xl py-5 w-24 hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                    Jerens
                </StandardLink>
                <div className="flex text-center my-auto h-full">
                    <div className="text-center relative h-full w-full hidden md:flex">
                        <StandardLink
                            href="/blog"
                            className="hidden md:block font-semibold text-gray-800 dark:text-white text-xl py-5 w-24 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        >
                            Blog
                        </StandardLink>
                        <StandardLink
                            href="/project"
                            className="hidden md:block font-semibold text-gray-800 dark:text-white text-xl py-5 w-24 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        >
                            Project
                        </StandardLink>
                        <StandardLink
                            href="/about"
                            className="hidden md:block font-semibold text-gray-800 dark:text-white text-xl py-5 w-24 hover:bg-gray-100 dark:hover:bg-neutral-800"
                        >
                            About
                        </StandardLink>
                    </div>
                    <Notifications />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export const NavbarMobile: React.FC = () => {
    return (
        <div className="fixed flex w-full px-10 py-2 bottom-0 h-18 bg-white dark:bg-neutral-800 z-40 md:hidden">
            <div className="flex justify-between w-full">
                <div className="flex-1 group">
                    <StandardLink
                        className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 dark:text-gray-200 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500"
                        href="/"
                    >
                        <span className="block px-1 pt-1 pb-2">
                            <FontAwesomeIcon className="block" icon={faHome} />
                            <span className="text-xs pb-1 block">Home</span>
                        </span>
                    </StandardLink>
                </div>
                <div className="flex-1 group">
                    <StandardLink
                        className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 dark:text-gray-200 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500"
                        href="/blog"
                    >
                        <span className="block px-1 pt-1 pb-2">
                            <FontAwesomeIcon className="block" icon={faCopy} />
                            <span className="text-xs pb-1 block">Blog</span>
                        </span>
                    </StandardLink>
                </div>
                <div className="flex-1 group">
                    <StandardLink
                        className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 dark:text-gray-200 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500"
                        href="/project"
                    >
                        <span className="block px-1 pt-1 pb-2">
                            <FontAwesomeIcon
                                className="block"
                                icon={faFileCode}
                            />
                            <span className="text-xs pb-1 block">Project</span>
                        </span>
                    </StandardLink>
                </div>
                <div className="flex-1 group">
                    <StandardLink
                        className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 dark:text-gray-200 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500"
                        href="/about"
                    >
                        <span className="block px-1 pt-1 pb-2">
                            <FontAwesomeIcon
                                className="block"
                                icon={faAddressCard}
                            />
                            <span className="text-xs pb-1 block">About</span>
                        </span>
                    </StandardLink>
                </div>
            </div>
        </div>
    )
}
