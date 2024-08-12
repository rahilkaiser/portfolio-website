"use client"
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import {usePathname} from "next/navigation";
import Link from "next/link";

const links = [
    {
        name: "Über mich",
        path: "/"
    },
    // {
    //     name: "experience",
    //     path: "/experience"
    // },
    {
        name: "Erfahrungen",
        path: "/resume"
    },
    {
        name: "Projekte",
        path: "/portfolio"
    },
    {
        name: "Kontakt",
        path: "/contact"
    }
]

export const MobileNav = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent "/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <SheetClose asChild>
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                Kaiser<span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </SheetClose>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <SheetClose key={index} asChild>
                            <Link className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                            href={link.path} >{link.name}</Link></SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};
