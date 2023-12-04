import { InlineIcon } from "@iconify/react";

export default function ProjectPill({ imageSrc, title, date, desc, languages = [], codeUrl, demoUrl, reverse }) {
    return (
        <section className="mt-4 shadow-xl rounded-xl bg-[#fff]">
            <div className={reverse ? "flex flex-col xl:flex-row-reverse" : "flex flex-col xl:flex-row"}>

                {/* Project Image */}
                <div className="basis-1/2 my-auto mx-6 my-6">
                    <img className="rounded-[10px] shadow" src={imageSrc} />
                </div>


                <div className="basis-1/2 px-8 md:py-6">
                    <section className="flex flex-col text-center">

                        {/* Project Title & Date */}
                        <div className="flex flex-col xl:flex-row mx-auto">
                            <p className="text-[#2d2e32] text-lg font-bold md:pb-3">{title.toUpperCase()}</p>
                            <p className="pl-1 text-[hsla(0,5%,8%,.773)]">{date}</p>
                        </div>

                        {/* Project Desc */}
                        <p className="mx-auto text-[#767676] text-base font-bold pb-3">{desc}</p>

                        {/* Languages */}
                        <div className="flex flex-col xl:flex-row">
                            {languages.map((language, idx) => (
                                <div key={idx} className="p-3 md:ml-3 mb-2 md:mb-0 font-bold shadow">{language}</div>
                            ))}
                        </div>

                        {/* Code */}
                        <div className="flex flex-col max-sm:mx-auto sm:flex-row mt-5 sm:place-content-evenly mb-6 md:mb-0">
                            <a href={codeUrl} target="_blank" className="flex font-bold hover:text-red-400">Code <InlineIcon className="my-auto text-xl ml-1" icon="solar:code-bold-duotone" /></a>

                            <a href={demoUrl} target="_blank" className="flex font-bold hover:text-red-400">Live Demo <InlineIcon className="my-auto text-xl ml-1" icon="tdesign:play-demo" /></a>
                        </div>

                    </section>
                </div>
            </div>
        </section>
    )
}
