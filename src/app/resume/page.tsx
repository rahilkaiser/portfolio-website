"use client"

import {motion} from "framer-motion";
import {FaAngular, FaCss3, FaDocker, FaGit, FaHtml5, FaJs, FaPhp, FaReact, FaSymfony} from "react-icons/fa";
import {SiFlutter, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const about = {
    title: 'Über mich',
    description: `Ich bin Rahil Kaiser, ein engagierter Softwareentwickler mit Erfahrung in der Fullstack-Entwicklung und App-Entwicklung. 
    In meinen bisherigen Stellen wurde mir oft bestätigt, dass ich mich schnell und systematisch in komplexe Systeme einarbeite. Ich arbeite lösungsorientiert und bin stets bereit, meinen Beitrag bestmöglich zu leisten, was mir ein sehr gutes Verhältnis zu Kollegen und Vorgesetzten eingebracht hat`,
    info: [
        {
            fieldName: "Name",
            fieldValue: "Rahil Kaiser"
        },
        {
            fieldName: "Telefon",
            fieldValue: "(+49) 375 28578228"
        },
        {
            fieldName: "E-Mail",
            fieldValue: "kaiser.rahil@gmail.com"
        },
        {
            fieldName: "Nationalität",
            fieldValue: "Ukraine / Pakistan"
        },
        {
            fieldName: "Verfügbarkeit",
            fieldValue: "Sofort verfügbar"
        },
        {
            fieldName: "Sprachen",
            fieldValue: "Deutsch, Englisch, Russisch"
        },
    ]
}

// Experience Data

const experience = {
    icon: '',
    title: "Meine Erfahrungen",
    description: "Über die letzten Jahre habe ich in verschiedenen Rollen als Full-Stack-Entwickler gearbeitet und dabei umfassende Erfahrungen in der Softwareentwicklung gesammelt. Meine Tätigkeiten umfassten die Entwicklung von Web- und Cloud-basierten Anwendungen, die Wartung und Verbesserung bestehender Systeme sowie die Betreuung von Sicherheits- und Überwachungssystemen.",
    items: [
        {
            company: "Freiberuflich",
            position: "Softwareentwickler",
            duration: "03.2024 - 05.2024"
        },
        {
            company: "IBYKUS AG",
            position: "Full Stack Entwickler",
            duration: "08.2022 - 08.2023"
        },
        {
            company: "Argus Security & Service GmbH",
            position: "Videoüberwachung und Sicherheitssysteme",
            duration: "11.2020 - 09.2021"
        },
        {
            company: "Chemmedia AG",
            position: "Full Stack Entwickler",
            duration: "05.2019 - 09.2020"
        }
    ]
}


const education = {
    icon: '',
    title: "Meine Ausbildung",
    description: "Fundierte Kenntnisse in angewandter Informatik, ergänzt durch eine vertiefte akademische Ausbildung mit Schwerpunkt auf Computergrafik.",
    items: [
        {
            institution: "Technische Universität Chemnitz",
            degree: "Bachelor in Angewandter Informatik",
            duration: "04.2017 - 10.2023"
        },
        {
            institution: "Berufliches Gymnasium Werdau",
            degree: "Allgemeine Hochschulreife",
            duration: "08.2013 - 07.2016"
        },
        {
            institution: "Pestalozzischule Zwickau",
            degree: "Mittlerer Schulabschluss",
            duration: "09.2012 - 07.2013"
        },
    ]
}


const skills = {
    title: "Meine Fähigkeiten",
    description: "Erfahren in modernen Webtechnologien und Frameworks mit einem starken Fokus auf Frontend- und Full-Stack-Entwicklung.",
    skillCategories: [
        {
            category: "Frontend",
            skillList: [
                {
                    icon: <FaHtml5/>,
                    name: "HTML 5",
                },
                {
                    icon: <FaCss3/>,
                    name: "CSS 3",
                },
                {
                    icon: <SiTailwindcss/>,
                    name: "Tailwind CSS",
                },
                {
                    icon: <FaJs/>,
                    name: "JavaScript",
                },
                {
                    icon: <SiTypescript/>,
                    name: "TypeScript",
                },
                {
                    icon: <FaReact/>,
                    name: "React.js",
                },
                {
                    icon: <SiNextdotjs/>,
                    name: "Next.js",
                },
                {
                    icon: <FaAngular/>,
                    name: "Angular",
                },
            ],
        },
        {
            category: "Backend",
            skillList: [
                {
                    icon: <FaSymfony/>,
                    name: "Symfony",
                },
                {
                    icon: <FaPhp/>,
                    name: "PHP",
                },
            ],
        },
        {
            category: "Mobile",
            skillList: [
                {
                    icon: <SiFlutter/>,
                    name: "Flutter",
                },
            ],
        },
        {
            category: "Tools & Technologien",
            skillList: [
                {
                    icon: <FaGit/>,
                    name: "Git",
                },
                {
                    icon: <FaDocker/>,
                    name: "Docker",
                },
            ],
        },
    ],


}

export default function Resume() {
    return (
        <motion.div
            initial={{
                y: "-200vh"
            }}
            animate={{
                y: "0%"
            }}
            transition={{
                delay: 0.8, duration: 0.4,
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Arbeitserfahrung</TabsTrigger>
                        <TabsTrigger value="education">Bildung</TabsTrigger>
                        <TabsTrigger value="skills">Kentnisse</TabsTrigger>
                        <TabsTrigger value="about">Über mich</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/*Experience*/}
                        <TabsContent value="experience" className="w-full">
                            <div
                                className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="text-white/60">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li key={index}
                                                       className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
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
                                <p className="text-white/60">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return <li key={index}
                                                       className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
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
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2, duration: 0.4, ease: "easeIn"}}
                                className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="text-white/60">{skills.description}</p>
                                </div>

                                <div >
                                    {skills.skillCategories.map((category, catIndex) => (
                                        <div key={catIndex}
                                             className="flex flex-col justify-center items-center text-center xl:text-left xl:justify-start xl:items-start">
                                            <h3 className="text-lg font-bold mb-4">{category.category}</h3>
                                            <ul className="flex flex-wrap justify-center items-center max-w-[400px] xl:flex-row xl:justify-start xl:items-start xl:max-w-none">
                                                {category.skillList.map((skill, index) => (
                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    className="w-full h-[150px] rounded-xl flex justify-center items-center group p-4">
                                                                    <div
                                                                        className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                            </motion.div>
                        </TabsContent>
                        {/*About me*/}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2, duration: 0.4, ease: "easeIn"}}
                                className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="text-white/60">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index}
                                                   className="flex items-center justify-center xl:justify-start gap-4">
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
