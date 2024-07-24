"use client"

import { motion } from "framer-motion";
import {FaAngular, FaCss3, FaDocker, FaGit, FaHtml5, FaJs, FaPhp, FaReact, FaSymfony} from "react-icons/fa";
import {SiFlutter, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const about = {
    title: 'About Me',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Rahil Kaiser"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+49) 178 577 4742"
        },
        {
            fieldName: "Email",
            fieldValue: "kaiser.rahil@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Ukraine / Pakistan"
        },
        {
            fieldName: "Availability",
            fieldValue: "Born Ready"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, German, Russian"
        },

    ]
}

// Experience Data

const experience = {
    icon: '',
    title: "My Experience",
    description: "Full-stack development of the Knowledgeworker-Share platform, revision and extension of the cloud management system, handling general support requests.",
    items: [
        {
            company: "Freelance",
            position: "Software Developer",
            duration: "11.2023 - 05.2024"
        },
        {
            company: "IBYKUS AG",
            position: "Full Stack Developer",
            duration: "08.2022 - 08.2023"
        },
        {
            company: "Argus Security & Service GmbH",
            position: "Camera Surveillance and Security Systems",
            duration: "08.2022 - 08.2023"
        },
        {
            company: "Chemmedia AG",
            position: "Full Stack Developer",
            duration: "05.2019 - 09.2020"
        }
    ]
}

const education = {
    icon: '',
    title: "My Education",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    items: [
        {
            institution: "Technical University of Chemnitz",
            degree: "Bachelor of Applied Computer Science",
            duration: "04.2017 - 10.2023"
        },
        {
            institution: "Vocational Gymnasium Werdau",
            degree: "General University Entrance Qualification",
            duration: "08.2013 - 07.2016"
        },
        {
            institution: "Pestalozzischule Zwickau",
            degree: "Intermediate School Certificate",
            duration: "09.2012 - 07.2013"
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "css 3",
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <SiTypescript/>,
            name: "typescript",
        },
        {
            icon: <FaReact/>,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js",
        },
        {
            icon: <FaAngular/>,
            name: "Angular",
        },
        {
            icon: <FaSymfony/>,
            name: "symfony",
        },
        {
            icon: <SiFlutter/>,
            name: "flutter",
        },
        {
            icon: <FaPhp/>,
            name: "php",
        },
        {
            icon: <FaGit/>,
            name: "git",
        },
        {
            icon: <FaDocker/>,
            name: "docker",
        },

    ]
}

export default function Resume() {
    return (
        <motion.div
            initial={{
                y:"-200vh"
            }}
            animate={{
                y:"0%"
            }}
            transition={{
                delay: 0.8, duration: 0.4,
            }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/*Experience*/}
                        <TabsContent value="experience" className="w-full">
                            <div
                                className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w--[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*Education*/}
                        <TabsContent value="education" className="w-full">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2, duration: 0.4, ease: "easeIn"}}
                                className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w--[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </motion.div>
                        </TabsContent>
                        {/*Skills*/}


                        <TabsContent value="skills" className="w-full h-full">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
                                className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </motion.div>
                        </TabsContent>
                        {/*About me*/}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
                                className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p>{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </motion.div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}
