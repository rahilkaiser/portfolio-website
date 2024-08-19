import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {PageTransition} from "@/components/PageTransition";


const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetbrainsMono',

});

export const metadata: Metadata = {
    title: "Rahil Kaiser",
    description: "Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        children
    );
}
