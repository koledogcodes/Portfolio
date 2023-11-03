import NavBarItem from "./NavBarItem";

export default function NavBar() {
    return (
        <nav className="flex w-screen bg-white mb-14">
            <NavBarItem heading>Kolade.dev</NavBarItem>

            <nav className="flex items-center w-full justify-end">
                <NavBarItem>Home</NavBarItem>
                <NavBarItem>About</NavBarItem>
                <NavBarItem>Projects</NavBarItem>
                <NavBarItem>Contact</NavBarItem>
            </nav>
        </nav>
    )
}
