import Hero from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ContactDetails from "./ContactDetails";
import AboutMe from "./AboutMe";
import Integrations from "./Integrations";

const MainFile = () => {
    return (
        <>
        <main className="bg-gray-100">
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Integrations />
          {/* <Contact /> */}
          <ContactDetails />
        </main>
      </>
    )
}

export default MainFile;