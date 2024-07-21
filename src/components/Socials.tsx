import {FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import Link from "next/link";

const socials = [
    // {icon: <FaGithub/>, path: ''},
    {icon: <FaLinkedin/>, path: ''},
    {icon: <FaYoutube/>, path: ''},
    {icon: <FaTwitter/>, path: ''},
    {icon: <FaInstagram/>, path: ''},
    {icon: <FaTiktok/>, path: ''},
]

interface Props {
    containerStyles: string,
    iconStyles: string
}

export const Socials = ({containerStyles, iconStyles}: Props) => {
    return (
        <div className={containerStyles}>
            {socials.map((social,index) => (
                <Link
                    key={index}
                    href={social.path}
                    className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};
