import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";

import {Header} from "@/components/Header";
import {PageTransition} from "@/components/PageTransition";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";


const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: '--font-jetbrainsMono',

});

export const metadata: Metadata = {
    title: "Rahil Kaiser",
    description: "Portfolio",
};

export default async function RootLayout(
    {
        children,
        params: {locale}
    }: Readonly<{
        children: React.ReactNode;
        params: { locale: string };
    }>) {

    const messages = await getMessages();
    return (
        <html lang="de">
        <body className={jetBrainsMono.variable}>
        <NextIntlClientProvider messages={messages}>
            <Header/>
            <PageTransition>
                {children}
            </PageTransition>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
