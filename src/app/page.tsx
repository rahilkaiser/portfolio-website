import {Button} from "@/components/ui/button";
import {FiMail} from "react-icons/fi";
import {Socials} from "@/components/Socials";
import {Photo} from "@/components/Photo";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto">

                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:gap-x-16">
                    {/*Text*/}
                    <div className="text-center xl:text-left order-2 xl:order-none flex flex-col justify-center items-center gap-4 xl:justify-start xl:items-start">
                        <span>Auf Sie zugeschnittene Softwarelösungen</span>
                        <h1 className="h1">
                            Ihr Wachstum ist unser <br/> <span className="text-accent">Ziel</span>
                        </h1>
                        <span className="max-w-[500px] mb-9 text-white/80">Bei EasyDEV sind wir Experten für <span className="text-accent"> Web- und App-Entwicklung</span>. Mit individuellen Lösungen bringen wir Ihr Unternehmen nach vorn. Kontaktieren Sie uns, um Ihre speziellen Wünsche zu besprechen.
                        </span>
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
                    <div className="order-1 xl:order-none mb-8 xl:mb-0 "><Photo/></div>
                </div>
            </div>
        </section>
    );
}
