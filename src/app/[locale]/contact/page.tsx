"use client"

import {Input} from "@/components/ui/input";
import {motion} from "framer-motion";
import {FaEnvelope, FaMapMarkerAlt, FaMobile, FaPhoneAlt, FaSpinner} from "react-icons/fa";

import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {CircleLoader} from "react-spinners";
import {useTranslations} from "next-intl";
import {FaMobileRetro} from "react-icons/fa6";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Mobil",
        description: "+49 178 577 4742",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "kaiser.rahil@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Addresse",
        description: "Prinz-Heinrich-Straße 7A 12307 Berlin",
    }
]
export default function Contact() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form: any = useRef(null);

    const trans = useTranslations('Contact');

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccess(false);
        setError(false);

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form.current!, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                () => {
                    setIsLoading(false);
                    setSuccess(true)
                    form.current.reset()


                },
                (error) => {
                    setIsLoading(false);
                    setError(true);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <motion.section
            initial={{
                y: "-200vh"
            }}
            animate={{
                y: "0%"
            }}
            transition={{
                delay: 0.8, duration: 0.4,
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/*Form*/}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={sendEmail} ref={form}
                              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                            {!isLoading ?
                                <> <h3 className="text-4xl text-accent">{trans('title')}</h3>
                                    <p className="text-white/60">
                                        {trans('description')}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input type="firstname" placeholder={trans('firstNamePlaceholder')}
                                               name="from_forename"/>
                                        <Input type="lastname" placeholder={trans('lastNamePlaceholder')}
                                               name="from_lastname"/>
                                        <Input type="email" placeholder={trans('emailPlaceholder')} name="email"/>
                                        <Input type="phone" placeholder={trans('phonePlaceholder')} name="phone"/>
                                    </div>

                                    <Textarea className="h-[200px]"
                                              placeholder={trans('messagePlaceholder')}
                                              name="message"
                                    />

                                    <div className="flex items-center gap-4">
                                        <Button type="submit" size="md" className="max-w-40">
                                            {!isLoading ? trans('sendButton') : <FaSpinner/>}
                                        </Button>
                                        {success &&
                                            <span className="text-sm text-accent">{trans('successMessage')}</span>}
                                        {error &&
                                            <span className="text-sm text-red-600">{trans('errorMessage')}</span>}
                                    </div>
                                </> : <div className="xl:min-h-[60vh] flex justify-center items-center"><CircleLoader
                                    color="#00ff99"/></div>
                            }
                        </form>
                    </div>

                    {/*Info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul>
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{trans(`info${index + 1}Title`)}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
