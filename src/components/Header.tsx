"use client"
import Link from "next/link";
import {Nav} from "./Nav";
import {Button} from "./ui/button";
import {MobileNav} from "@/components/MobileNav";
import {FiDownload} from "react-icons/fi";
import {useLocale} from "next-intl";
import {useTransition} from "react";
import {usePathname, useRouter} from "@/navigation";


export const Header = () => {
    const locale = useLocale();
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

    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold ">
                        Kaiser<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/*    DESKTOP NAV*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>

                    <Link href="/lebenslauf.pdf" target="_blank"><Button variant="outline" size="md"
                                                                         className="uppercase flex items-center gap-2 duration-500">
                        Download CV
                        <FiDownload className="text-xl"/>
                    </Button></Link>

                    <div className="flex gap-2">
                        <span
                            className={`${locale == "en" && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent `}
                            onClick={() => {
                                onSelectChange("en")
                            }}>
                            EN
                        </span>
                        |
                        <span
                            className={`${locale == "de" && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent `}
                            onClick={() => {
                                onSelectChange("de")
                            }}>
                            DE
                        </span>
                    </div>
                </div>

                {/*    mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};
