"use client"


import CountUp from "react-countup";

const stats = [
    {
        num: 3,
        text: "Jahre an Erfahrung"
    },
    {
        num: 5,
        text: "Abgeschlossene Projekte"
    },
    {
        num: 5,
        text: "Gemeisterte Technologien"
    },
    {
        num: 300,
        text: "Code commits"
    },
]
export const Stats = () => {
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
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
