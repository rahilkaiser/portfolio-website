"use client"


import Link from "next/link";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {Button} from "./ui/button";

const links = [
    {
        transKey: "about",
        path: "/"
    },
    {
        transKey: "experience",
        path: "/resume"
    },
    {
        transKey: "projects",
        path: "/portfolio"
    },
    {
        transKey: "contact",
        path: "/contact"
    }
]
export const Nav = () => {
        const pathName = usePathname();
        const locale = useLocale()
        const trans = useTranslations();

        function getRealPathName(linkPath: string) {

            const split = pathName.split("/")


            if (split[split.length - 1] == linkPath.slice(1)) {
                console.log(split[split.length - 1], "LINK")
                return true;
            } else if (split[split.length - 1] == locale && linkPath == "/") {
                return true;
            } else {
                console.log(split[split.length - 1], "LINK")
                return false;
            }


        }


        console.log(pathName, locale, "/" + locale + links[0].path)
        return (
            <nav className="flex gap-8">
                {links.map((link, index) => {
                    return <Link
                        className={`${getRealPathName(link.path) && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent `}
                        href={link.path}
                        key={index}>
                        {trans(link.transKey)}
                    </Link>
                })}
            </nav>




        );
    }
;
