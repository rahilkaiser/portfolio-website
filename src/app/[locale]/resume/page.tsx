"use client";

import { motion, Variants, useSpring, useScroll } from "framer-motion";
import {
  FaAngular,
  FaCodeBranch,
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaSymfony,
} from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const about = {
  title: "Über mich",
  description: `Ich bin Rahil Kaiser, ein engagierter Softwareentwickler mit Erfahrung in der Fullstack-Entwicklung und App-Entwicklung. 
    In meinen bisherigen Stellen wurde mir oft bestätigt, dass ich mich schnell und systematisch in komplexe Systeme einarbeite. Ich arbeite lösungsorientiert und bin stets bereit, meinen Beitrag bestmöglich zu leisten.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rahil Kaiser",
    },
    {
      fieldName: "Telefon",
      fieldValue: "(+49) 178 577 4742",
    },
    {
      fieldName: "E-Mail",
      fieldValue: "kaiser.rahil@gmail.com",
    },
    {
      fieldName: "Nationalität",
      fieldValue: "Ukraine / Pakistan",
    },
    {
      fieldName: "Verfügbarkeit",
      fieldValue: "Sofort verfügbar",
    },
    {
      fieldName: "Sprachen",
      fieldValue: "Deutsch, Englisch, Russisch",
    },
  ],
};

// Experience Data

const experience = {
  icon: "",
  title: "Meine Erfahrungen",
  description:
    "Über die letzten Jahre habe ich in verschiedenen Rollen als Full-Stack-Entwickler gearbeitet und dabei umfassende Erfahrungen in der Softwareentwicklung gesammelt. Meine Tätigkeiten umfassten die Entwicklung von Web- und Cloud-basierten Anwendungen, die Wartung und Verbesserung bestehender Systeme sowie die Betreuung von Sicherheits- und Überwachungssystemen.",
  items: [
    {
      company: "Freelancer",
      position: "Full Stack Entwickler",
      duration: "05.2024 - aktuell",
      skillList: [
        {
            icon: <SiNodedotjs />,
            name: "Node.js",
          },
          {
          icon: <FaAngular />,
          name: "Angular",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
          },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
          },
        {
          icon: <FaReact />,
          name: "React",
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
        },
        {
          icon: <FaGit />,
          name: "Git",
        },
      ],
    },
    {
      company: "IBYKUS AG",
      position: "Software Entwickler",
      duration: "08.2022 - 08.2023",
      skillList: [
        {
          icon: <FaCodeBranch />,
          name: "WinCVS",
        },
        {
          icon: <SiOracle />,
          name: "Oracle",
        },
        {
          icon: <FaPython />,
          name: "Python",
        },
        {
          icon: <FaGit />,
          name: "Git",
        },
      ],
    },
    {
      company: "Chemmedia AG",
      position: "Full Stack Entwickler",
      duration: "05.2019 - 09.2020",
      skillList: [
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
        },
        {
          icon: <FaAngular />,
          name: "Angular",
        },
        {
          icon: <FaSymfony />,
          name: "Symfony",
        },
        {
          icon: <FaPhp />,
          name: "PHP",
        },
        {
          icon: <FaGit />,
          name: "Git",
        },
        {
          icon: <FaDocker />,
          name: "Docker",
        },
      ],
    },
  ],
};

const education = {
  icon: "",
  title: "Meine Ausbildung",
  description:
    "Fundierte Kenntnisse in angewandter Informatik, ergänzt durch eine vertiefte akademische Ausbildung mit Schwerpunkt auf Computergrafik.",
  items: [
    {
      institution: "Technische Universität Chemnitz",
      degree: "Bachelor in Angewandter Informatik",
      duration: "04.2017 - 10.2023",
    },
    {
      institution: "Berufliches Gymnasium Werdau",
      degree: "Allgemeine Hochschulreife",
      duration: "08.2013 - 07.2016",
    },
    {
      institution: "Pestalozzischule Zwickau",
      degree: "Mittlerer Schulabschluss",
      duration: "09.2012 - 07.2013",
    },
  ],
};

const skills = {
  title: "Meine Fähigkeiten",
  description:
    "Erfahren in modernen Webtechnologien und Frameworks mit einem starken Fokus auf Frontend- und Full-Stack-Entwicklung.",
  skillCategories: [
    {
      category: "Frontend",
      skillList: [
        {
          icon: <FaHtml5 />,
          name: "HTML 5",
        },
        {
          icon: <FaCss3 />,
          name: "CSS 3",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
        },
        {
          icon: <FaReact />,
          name: "React.js",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          icon: <FaAngular />,
          name: "Angular",
        },
      ],
    },
    {
      category: "Backend",
      skillList: [
        {
          icon: <FaSymfony />,
          name: "Symfony",
        },
        {
          icon: <FaPhp />,
          name: "PHP",
        },
      ],
    },
    {
      category: "Mobile",
      skillList: [
        {
          icon: <SiFlutter />,
          name: "Flutter",
        },
      ],
    },
    {
      category: "Tools",
      skillList: [
        {
          icon: <FaGit />,
          name: "Git",
        },
        {
          icon: <FaDocker />,
          name: "Docker",
        },
      ],
    },
  ],
};

const timelineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Resume() {
  const trans = useTranslations("Resume");
  const timelineRef = useRef<HTMLDivElement>(null);

  const renderTimeline = (
    items: any[],
    transKey: string,
    isEducation: boolean = false
  ) => (
    <motion.div ref={timelineRef} className="relative">
      <motion.div
        className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-accent origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        // style={{ scaleY }}
      />
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          custom={index % 2 === 0 ? "left" : "right"}
          initial="hidden"
          animate="visible"
          className={`flex items-center mb-12 ${
            index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
          }`}
        >
          <div
            className={`w-full lg:w-5/12 ${
              index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"
            }`}
          >
            <motion.div
              className="bg-[#232329] p-6 rounded-lg shadow-lg hover:shadow-accent transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {trans(
                  `${transKey}${index + 1}${
                    isEducation ? "Degree" : "Position"
                  }`
                )}
              </h3>
              <p className="text-accent mb-2">
                {trans(
                  `${transKey}${index + 1}${
                    isEducation ? "Institution" : "Company"
                  }`
                )}
              </p>
              {item.skillList && (
                <div className="grid grid-cols-4 gap-4 my-6">
                  {item.skillList.map((skill: any, index: any) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-accent text-3xl mb-2">
                        {skill.icon}
                      </div>
                      <div className="text-xs text-center">{skill.name}</div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm font-bold text-gray-400">{item.duration}</p>
            </motion.div>
          </div>
          <motion.div
            className="absolute left-[-0.5rem] lg:left-[49.5%]  w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 md:-translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-primary text-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="experience" className="space-y-8 md:space-y-12">
          <TabsList className="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap space-x-2 md:space-x-4 mb-8 md:mb-12">
            <TabsTrigger
              value="experience"
              className="text-base md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#232329] hover:bg-accent hover:text-primary transition-colors mb-2"
            >
              {trans("experienceTitle")}
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-base md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#232329] hover:bg-accent hover:text-primary transition-colors mb-2"
            >
              {trans("educationTitle")}
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="text-base md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#232329] hover:bg-accent hover:text-primary transition-colors mb-2"
            >
              {trans("skillsTitle")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            {renderTimeline(experience.items, "experience")}
          </TabsContent>

          <TabsContent value="education">
            {renderTimeline(education.items, "education", true)}
          </TabsContent>

          <TabsContent value="skills">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {skills.skillCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  variants={cardVariants}
                  className="bg-[#232329] p-4 md:p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-accent">
                    {trans(`skills${category.category}`)}
                  </h3>
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {category.skillList.map((skill, index) => (
                      <TooltipProvider key={index}>
                        <Tooltip>
                          <TooltipTrigger>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex flex-col items-center"
                            >
                              <div className="text-2xl md:text-3xl mb-1 md:mb-2">
                                {skill.icon}
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{trans(`skill${skill.name}`)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
