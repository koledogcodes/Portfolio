
import NavBar from "../../components/NavBar";
import AboutMe from "../../sections/AboutMe";
import ContactUs from "../../sections/ContactUs";
import Footer from "../../sections/Footer";
import Intro from "../../sections/Intro";
import Projects from "../../sections/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  )
}
