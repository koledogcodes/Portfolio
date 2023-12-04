import Container from "../components/Container";
import ProjectPill from "../components/ProjectPill";
const Projs = require('../projects.json');

export default function Projects() {
    return (
        <Container id="projects">
            <section className="flex flex-col">
                <p className="text-red-500 text-lg font-bold pb-3">PORTFOLIO PROJECTS</p>
                <p className="text-black text-2xl font-bold pb-3">Each project is a unique app 👨🏾‍💻</p>
            </section>

            {/* Projects */}
            {Object.keys(Projs).map((title, idx) => (
                <ProjectPill
                    key={idx}
                    imageSrc={Projs[title].imageSrc}
                    languages={Projs[title].languages}
                    title={title}
                    date={Projs[title].date}
                    desc={Projs[title].description}
                    codeUrl={Projs[title].codeUrl}
                    demoUrl={Projs[title].demoUrl}
                    reverse={idx % 2}
                />
            ))}
        </Container>
    )
}
