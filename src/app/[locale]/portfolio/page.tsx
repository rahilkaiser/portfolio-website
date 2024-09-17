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
import {useTranslations} from "next-intl";

interface Project {
    num: string;
    categoryTransKey: string;
    titleTransKey: string;
    descriptionTransKey: string;
    stack: { name: string }[];
    image: string;
    phone: string;
    live: string;
    github: string;
}

const projectList: Project[] = [
    {
        num: '01',
        categoryTransKey: 'project1Category',
        titleTransKey: 'project1Title',
        descriptionTransKey: 'project1Description',
        stack: [
            {name: 'Next.js'},
            {name: 'Tailwind.css'},
            {name: 'Cloudinary'},
            {name: 'MongoDB'},
        ],
        image: '/QuickEditMockup.png',
        phone: "/QuickEditMockApple.png",
        live: 'https://bild-edit.vercel.app/',
        github: 'https://github.com/rahilkaiser/bild-edit.git',
    },
    {
        num: '02',
        categoryTransKey: 'project2Category',
        titleTransKey: 'project2Title',
        descriptionTransKey: 'project2Description',
        stack: [
            {name: 'Angular'},
            {name: 'Tailwind.css'},
            {name: 'Firebase'},
            {name: 'TMDB API'},
            {name: 'Bootstrap'},
        ],
        image: '/NetflixMockup.png',
        phone: "/NetflixMockupApple.png",
        live: 'https://master--angular-store-project.netlify.app',
        github: 'https://github.com/rahilkaiser/angular-netflix-clone.git',
    },
    {
        num: '03',
        categoryTransKey: 'project3Category',
        titleTransKey: 'project3Title',
        descriptionTransKey: 'project3Description',
        stack: [
            {name: 'Next.js'},
            {name: 'Tailwind.css'},
            {name: 'Wix Studio Headless CMS'},
        ],
        image: '/NekoStoreMockup.png',
        phone: "/NekoMockApple.png",
        live: 'https://nekostore.vercel.app/',
        github: 'https://github.com/rahilkaiser/nekostore.git',
    },

];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project>(projectList[0]);

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setSelectedProject(projectList[currentIndex!]);
    }

    const trans = useTranslations('Portfolio');

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
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >

        <div className="container mx-auto px-4 text-white">
          {projectList.map((project, index) => (
            <motion.div 
              key={project.num}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:py-12 mb-20`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-full lg:w-1/2 relative overflow-hidden group">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={project.image} 
                    alt={trans(project.titleTransKey)} 
                    width={800} 
                    height={500} 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-primary text-center opacity-0 group-hover:opacity-100 max-w-[240px] transition-opacity duration-300">
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.stack.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-primary text-accent px-2 py-1 rounded-sm text-xs">
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={`w-full lg:w-7/12 lg:absolute ${index % 2 === 0 ? 'lg:text-right lg:right-0' : 'lg:text-left lg:left-0'} lg:top-1/2 lg:transform lg:-translate-y-1/2`}>
                <p className="text-accent mb-2 text-sm lg:text-base font-semibold" id="codeFont">{trans(project.categoryTransKey)}</p>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                  {trans(project.titleTransKey)}
                </h3>
                <motion.div 
                  className="bg-emerald-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 lg:p-6 rounded-lg shadow-md mb-4 border border-accent border-opacity-10"
                  whileHover={{ boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
                >
                  <p className="text-sm lg:text-base">{trans(project.descriptionTransKey)}</p>
                </motion.div>
                <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} space-x-4`}>
                  <Link 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative group text-accent transition-colors duration-300 flex items-center"
                  >
                    {trans('viewProject')}
                    <BsArrowUpRight size={16} className="ml-2" />
                    <span className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
                  </Link>
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative group text-accent transition-colors duration-300 flex items-center"
                  >
                    {trans('githubRepository')}
                    <BsGithub size={16} className="ml-2" />
                    <span className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        </motion.section>
    );
}


