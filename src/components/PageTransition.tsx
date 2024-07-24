"use client"
import {AnimatePresence, motion} from "framer-motion";
import {ReactNode} from "react";
import {usePathname} from "next/navigation";

interface Props {
    children?: ReactNode
}

export const PageTransition = ({children}: Props) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <motion.div
                    className="h-screen w-screen fixed top-0 pointer-events-none bg-emerald-950 rounded-b-[100px] z-40"
                    animate={{
                        height: "0vh",
                    }}
                    exit={{
                        height: "140vh",
                        transition: {duration: 0.5, ease: "easeIn",}
                    }}
                />
                <motion.div
                    className="h-screen w-screen fixed bottom-0 pointer-events-none bg-emerald-950 rounded-t-[100px] z-40"
                    initial={{
                        height: "140vh",
                    }}
                    animate={{
                        height: "0vh",
                        transition: {delay: 0.8, duration: 0.4, ease: "easeOut",}
                    }}
                />
                {children}
            </div>
        </AnimatePresence>
    );
};
