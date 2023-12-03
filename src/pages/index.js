import { InlineIcon } from "@iconify/react";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <Container>
        <div id="home" className="flex flex-col-reverse md:flex-row">

          <section className="flex flex-col basis-1/2 my-auto">
            <h1 className="basis-1/2 text-6xl py-5 text-center md:text-start">Software Engineer</h1>
            <p className=" basis-1/2 text-lg py-5 text-center md:text-start">Hi, I&apos;m Kolade Olorunnife. A passionate Software Engineer with experience in web and mobile development based in Melbourne, Australia. 📍</p>

            {/* Socials */}
            <section className="flex justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/stephen-olorunnife-84b449177/" target="_blank">
                <InlineIcon className="text-4xl text-blue-700 icon" icon="mdi:linkedin" />
              </a>

              <a href="https://gitlab.com/KoolaidDaBeast" className="px-2 my-auto" target="_blank">
                <InlineIcon className="text-4xl icon" icon="mdi:github" />
              </a>

              <a href="https://twitter.com/KoolaidDaBeast" className="my-auto" target="_blank">
                <InlineIcon className="text-4xl text-blue-400 icon" icon="mdi:twitter" />
              </a>
            </section>
          </section>

          {/* Self Portait */}
          <section className="basis-1/2 h-[320px]">
            <div className="flex flex-row-reverse relative h-full">
              <div className="flex p-[4px] profile-img bg-black">
                <img className="mx-auto rounded-3xl profile-img" src={"/selfie.jpg"} alt={"/selfie.jpeg"} />
              </div>
            </div>
          </section>

        </div>

      </Container>
    </>
  )
}
