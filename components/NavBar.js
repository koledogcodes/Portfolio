import { useState } from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <nav className="flex flex-col w-full bg-white mb-14 sm:flex-row fixed z-10">
            <NavBarItem heading>
                <span className="flex">
                    <div className="flex-none">Kolade.dev</div>
                    <div className="flex items-center flex-row w-full justify-end sm:hidden" onClick={() => setExpanded(expanded => !expanded)}>
                        ...
                    </div>
                </span>
            </NavBarItem>


            <div data-expand={expanded} className="flex flex-col items-center w-full justify-end sm:flex-row max-md:data-[expand=false]:hidden">
                <NavBarItem href="#intro">Home</NavBarItem>
                <NavBarItem href="#about">About</NavBarItem>
                <NavBarItem href="#projects">Projects</NavBarItem>
                <NavBarItem href="#contact">Contact</NavBarItem>
            </div>
        </nav>
    )
}
