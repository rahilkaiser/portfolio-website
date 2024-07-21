"use client"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
import {usePathname} from "next/navigation";
import Link from "next/link";

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
        name: "Über uns",
        path: "/about"
    },
    {
        name: "portfolio",
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
            <CiMenuFries className="text-[32px] text-accent " />
        </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            EasyDEV<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link,index) => (
                        <Link className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};
