"use client"


import CountUp from "react-countup";
import {useTranslations} from "next-intl";

const stats = [
    {
        num: 2,
        transKey: "statsYearsExperience"
    },
    {
        num: 5,
        transKey: "statsCompletedProjects"
    },
    {
        num: 4,
        transKey: "statsMasteredTechnologies"
    },
    {
        num: 5,
        transKey: "statsLongTermCommitment"
    },
]
export const Stats = () => {
    const trans = useTranslations('Home');

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat,index) => (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                        key={index}>
                            <CountUp
                                end={stat.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"/>
                            <p className={`${trans(stat.transKey).length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{trans(stat.transKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
