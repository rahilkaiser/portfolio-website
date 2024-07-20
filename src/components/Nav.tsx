"use client"


import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]
export const Nav = () => {
    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link
                    className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent duration-300 transition-all`}
                    href={link.path}
                    key={index}>
                    {link.name}
                </Link>
            })}
        </nav>
    );
};
