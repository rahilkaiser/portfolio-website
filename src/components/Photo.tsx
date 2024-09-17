"use client"

import {motion} from "framer-motion";
import Image from "next/image";

export const Photo = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* SVG */}
            <motion.svg
                className="absolute w-[78vw] h-[78vw] max-w-[506px] max-h-[506px] md:w-[70vw] md:h-[70vw] lg:w-[50vw] lg:h-[50vw]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* outer ring */}
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="1"
                    strokeDasharray="5 10"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* inner ring */}
                <motion.circle
                    cx="253"
                    cy="253"
                    r="230"
                    stroke="#10b981"
                    strokeWidth="1"
                    initial={{ scale: 0.95, opacity: 0.3 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </motion.svg>

            {/* Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeIn" }}
                className="relative w-[70vw] h-[70vw] max-w-[480px] max-h-[480px]  lg:w-[50vw] lg:h-[50vw] bg-emerald-900 rounded-full overflow-hidden -z-10"
            >
                <Image
                    src="/profile.png"
                    alt={"Hero Image Software Entwicklung"}
                    priority
                    quality={100}
                    fill
                    className="object-contain rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary to-transparent mix-blend-overlay"/>
            </motion.div>
        </div>
    );
};
