import Link from "next/link";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import {MobileNav} from "@/components/MobileNav";
import {FiDownload} from "react-icons/fi";

export const Header = () => {
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
                    <Nav />

                    <Button variant="outline" size="md"
                            className="uppercase flex items-center gap-2 duration-500">
                        Download CV
                        <FiDownload className="text-xl"/>
                    </Button>
                </div>

            {/*    mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};
