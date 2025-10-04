import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import ExperinceSection from "./sections/ExperienceSection";
import FeaturesCard from "./sections/FeaturesCard";
import { Hero } from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testomonials from "./sections/Testomonials";

const App = () =>{
    return(
        <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeaturesCard />
        <ExperinceSection />
        <TechStack />
        <Testomonials />
        <Contact  />
        </>
    )
}
export default App;
