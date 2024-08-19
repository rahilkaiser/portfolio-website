"use client"
import {Button} from "@/components/ui/button";
import {FiDownload, FiMail} from "react-icons/fi";
import {Socials} from "@/components/Socials";
import {Photo} from "@/components/Photo";
import {Stats} from "@/components/Stats";
import {motion} from "framer-motion";
import {Github, GithubIcon} from "lucide-react";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Home() {

    const trans = useTranslations('Home');

    return (
        <motion.section
            initial={{
                y: "-200vh"
            }}
            animate={{
                y: "0%"
            }}
            transition={{
                delay: 0.8, duration: 0.4,
            }}
            className="h-full">
            <div className="container mx-auto">

                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:gap-x-16">
                    {/*Text*/}
                    <div
                        className="text-center xl:text-left order-2 xl:order-none flex flex-col justify-center items-center gap-4 xl:justify-start xl:items-start">
                        <span>{trans('heroTitle1')}</span>
                        <h1 className="h1">
                            {trans('heroTitle2')} <br/> <span className="text-accent">Rahil Kaiser</span>
                        </h1>
                        <span className="max-w-[500px] mb-9 text-white/80">
                            {trans("heroDescription1")} <span
                            className="text-accent">{trans("heroHighlight1")}</span> {trans("heroDescription2")} <span
                            className="text-accent">{trans("heroHighlight2")}</span>.
                        </span>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Link href="/lebenslauf.pdf" target="_blank">
                                <Button variant="outline" size="lg"
                                        className="uppercase flex items-center gap-2 duration-500">
                                    {trans("resumeButton")}
                                    <FiDownload className="text-xl"/>
                                </Button></Link>
                            <div className="mb-8 xl:mb-0">
                                <Link href="https://github.com/rahilkaiser" target="_blank">
                                    <Button variant="outline" size="lg"
                                            className="uppercase flex items-center gap-2 duration-500">
                                        <FaGithub className="text-xl"/>
                                        Github
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        {/*    Button CTA and Socials*/}
                    </div>
                    {/*Image*/}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 "><Photo/></div>
                </div>
            </div>
            <Stats/>
        </motion.section>
    );
}
