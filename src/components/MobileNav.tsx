"use client"
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {CiMenuFries} from "react-icons/ci";
// import {usePathname} from "next/navigation";
import Link from "next/link";
import {useLocale} from "next-intl";
import {useRouter, usePathname} from "@/navigation";
import {useTransition} from "react";

const links = [
    {
        name: "Über mich",
        path: "/"
    },
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
    const locale = useLocale()

    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onSelectChange(nextLocale:"de" | "en" | undefined) {

        startTransition(() => {
            router.replace(pathname, {
                    locale: nextLocale
                }
            );
        });
    }

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
                            <Link
                                className={`${getRealPathName(link.path) && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                                href={link.path}>{link.name}</Link></SheetClose>
                    ))}

                    <div className="flex gap-2">
                        <span
                            className={`${locale == "en" && "text-accent border-b-2 border-accent"} cursor-pointer capitalize font-medium hover:text-accent `}
                            onClick={() => {
                                onSelectChange("en")
                            }}>
                            EN
                        </span>
                        |
                        <span
                            className={`${locale == "de" && "text-accent border-b-2 border-accent"} cursor-pointer capitalize font-medium hover:text-accent `}
                            onClick={() => {
                                onSelectChange("de")
                            }}>
                            DE
                        </span>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
};
