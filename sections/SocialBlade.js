import { InlineIcon } from "@iconify/react";

export default function SocialBlade() {
    return (
        <>
            <a href="https://www.linkedin.com/in/kolade-o-software-eng/" className="my-auto" target="_blank">
                <InlineIcon className="text-4xl bg-white rounded-xl text-blue-700 icon" icon="mdi:linkedin" />
            </a>

            <a href="https://gitlab.com/users/KoolaidDaBeast/projects" className="px-2 my-auto" target="_blank">
                <InlineIcon className="text-4xl icon bg-white rounded-full" icon="mdi:github" />
            </a>

            <a href="https://discord.com/users/142464934696058881" className="my-auto" target="_blank">
                <InlineIcon className="text-4xl icon bg-white text-[rgb(88,101,242)] rounded-full" icon="skill-icons:discord" />
            </a>
        </>
    )
}
