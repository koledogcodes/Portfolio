import Container from "../components/Container";
import ProjectPill from "../components/ProjectPill";

export default function Projects() {
    return (
        <Container id="projects">
            <section className="flex flex-col">
                <p className="text-red-500 text-lg font-bold pb-3">PORTFOLIO PROJECTS</p>
                <p className="text-black text-2xl font-bold pb-3">Each project is a unique app 👨🏾‍💻</p>
            </section>

            {/* Projects */}
            <ProjectPill
                imageSrc="./JavascriptMpiCloud.PNG"
                languages={["HTML", "CSS", "JavaScript", "NodeJS", "Socket.IO"]}
                title="Javascript MPI Cloud"
                date="(March, 2020)"
                desc="A web application to communicate over the cloud with any number of connected devices that will work together to perform a task. The mpi functions have a similar method signature to the C++ MPI implementation to ensure consistency when using my web application."
                codeUrl="https://gitlab.com/KoolaidDaBeast/javascript-mpi-cloud"
                demoUrl="https://javascript-mpi-cloud-web.vercel.app/"
            />
        </Container>
    )
}
