"use client";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useState} from "react";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import {PortfolioSliderButtons} from "@/components/PortfolioSliderButtons";

interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: { name: string }[];
    image: string;
    live: string;
    github: string;
}

const projectList: Project[] = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et just',
        stack: [
            {name: 'Html 5'},
            {name: 'Css 3'},
            {name: 'Javascript'},
        ],
        image: '/ProThumb.jpg',
        live: '',
        github: '',
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et just',
        stack: [
            {name: 'Next.js'},
            {name: 'Tailwind.css'},
            {name: 'Node.js'},
        ],
        image: '/thumb2.jpg',
        live: '',
        github: '',
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et just',
        stack: [
            {name: 'Next.js'},
            {name: 'Tailwind.css'},
        ],
        image: '/thumb3.png',
        live: '',
        github: '',
    },
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project>(projectList[0]);

    const handleSlideChange = (swiper:any) => {
        const currentIndex = swiper.activeIndex;
        setSelectedProject(projectList[currentIndex!]);
    }

    return (
        <motion.section
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition:{delay:2.4, duration: 0.4, ease:"easeIn"}
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {selectedProject.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{selectedProject.category} project</h2>
                            <p className="text-white/60">{selectedProject.description}</p>
                            <ul className="flex gap-4">
                                {selectedProject.stack.map((item, i) => (
                                    <li key={i} className="text-xl text-accent">
                                        {item.name}
                                        {i !== selectedProject.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={selectedProject.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight
                                                    className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={selectedProject.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger
                                                className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projectList.map((item, i) => (
                                <SwiperSlide key={i} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/*Overlay*/}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/*    Image*/}
                                        <div>
                                            <Image
                                                src={item.image}
                                                fill
                                                className="object-cover"
                                                alt="" />
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        {/*    Slider Buttons*/}
                            <PortfolioSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-between"
                                                    iconStyles=""
                                                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    );
}
