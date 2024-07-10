import { FaLinkedin, FaSquareGithub, FaSquareEnvelope, FaSquareFacebook } from "react-icons/fa6";

export const FULL_NAME = "Troy Zada";

export const BASE_GITHUB = "https://github.com";
const LINKEDIN_LINK = "https://www.linkedin.com/in/troy-zada";
const FACEBOOK_LINK = "https://www.facebook.com/troy.m.zada";
const GITHUB_LINK = `${BASE_GITHUB}/tzada8`;
export const EMAIL = "tzada@uwaterloo.ca";

export const socials = [
    {link: `mailto:${EMAIL}`, icon: <FaSquareEnvelope />, tooltip: EMAIL},
    {link: FACEBOOK_LINK, icon: <FaSquareFacebook />},
    {link: LINKEDIN_LINK, icon: <FaLinkedin />},
    {link: GITHUB_LINK, icon: <FaSquareGithub />},
]
