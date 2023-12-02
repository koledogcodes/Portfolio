import Image from "next/image";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <Container>
        <div className="flex flex-col-reverse md:flex-row h-auto">

          <section className="flex flex-col basis-1/2">
            <h1 className="basis-1/2 text-6xl">Software Engineer</h1>
            <p className=" basis-1/2 text-lg">Hi, I'm Kolade Olorunnife. A passionate Software Engineer with experience in web and mobile development based in Melbourne, Australia. 📍</p>
          </section>

          <section className="basis-1/2">
            <div className="flex flex-row-reverse">
              <Image className="mx-auto rounded-full" src={"/profile.jpeg"} alt={""} width={128} height={128} />
            </div>
          </section>

        </div>

      </Container>
    </>
  )
}
