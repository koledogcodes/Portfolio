import Container from "../components/Container";

const URL = "https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp";

export default function AboutMe() {
    return (
        <Container id="about" light>
            <section className="flex flex-col xl:flex-row">
                <div className="basis-1/2 px-[5%] pb-3 xl:pb-0 my-auto">
                    <img src={"./about.JPG"} alt={"./about.JPG"} className="rounded-3xl" />
                </div>

                <div className="basis-1/2">
                    <section className="h-full">
                        <p className="text-red-500 text-lg font-bold pb-3">ABOUT ME</p>
                        <p className="text-2xl font-bold pb-3">A dedicated Software Engineer based in Melbourne, Australia 📍</p>
                        <p className="text-slate-700 text-lg">
                            Current DevOps Engineer with 8 years programming experience and completed Bachelor of Software Engineering
                            (Honors) with published article. <br />
                            My skills include frontend/backend web application development using react and NodeJS or
                            asp.net, mobile application development using android studio and game add on development with java. <br />
                            I am seeking to expand to the field of Software Engineering more development focused role and grow within
                            the industry.
                        </p>
                    </section>
                </div>
            </section>
        </Container>
    )
}
