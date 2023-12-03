import Container from "../components/Container";
import SocialBlade from "./SocialBlade";

export default function Intro() {
    return (
        <Container id="intro">
            <div id="home" className="flex flex-col-reverse md:flex-row mt-[40px] xl:mt-0">

                <section className="flex flex-col basis-1/2 my-auto">
                    <h1 className="basis-1/2 text-6xl py-5 text-center md:text-start">Software Engineer</h1>
                    <p className=" basis-1/2 text-lg py-5 text-center md:text-start">Hi, I&apos;m Kolade Olorunnife. A passionate Software Engineer with experience in web and mobile development based in Melbourne, Australia. 📍</p>

                    {/* Socials */}
                    <section className="flex justify-center md:justify-start">
                        <SocialBlade />
                    </section>
                </section>

                {/* Self Portait */}
                <section className="basis-1/2 h-[320px]">
                    <div className="flex flex-row-reverse relative h-full">
                        <div className="flex p-[4px] mx-auto profile-img bg-black">
                            <img className="rounded-3xl profile-img" src={"/selfie.jpg"} alt={"/selfie.jpeg"} />
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    )
}
