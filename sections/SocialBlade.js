import { InlineIcon } from "@iconify/react";

export default function SocialBlade() {
    return (
        <>
            <a href="https://www.linkedin.com/in/kolade-o-software-eng/" className="my-auto" target="_blank">
                <InlineIcon className="text-4xl text-blue-700 icon" icon="mdi:linkedin" />
            </a>

            <a href="https://gitlab.com/users/KoolaidDaBeast/projects" className="px-2 my-auto" target="_blank">
                <InlineIcon className="text-4xl icon bg-white rounded-full" icon="mdi:github" />
            </a>

            <a href="https://twitter.com/KoolaidDaBeast" className="my-auto" target="_blank">
                <InlineIcon className="text-4xl text-blue-400 icon" icon="mdi:twitter" />
            </a>
        </>
    )
}
