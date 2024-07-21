import {Button} from "@/components/ui/button";
import {FiMail} from "react-icons/fi";
import {Socials} from "@/components/Socials";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto">

                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/*Text*/}
                    <div className="text-center xl:text-left">
                        <span>Software Entwicklung</span>
                        <h1 className="h1">
                            Hello I`m <br/> <span className="text-accent">Rahil Kaiser</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences
                            and i am proficient in various programming languages and technologies.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 duration-500">
                                Kontaktieren Sie Uns
                                <FiMail className="text-xl"/>
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                        {/*    Button CTA and Socials*/}
                    </div>
                    {/*Image*/}
                    <div>photo</div>
                </div>
            </div>
        </section>
    );
}
