import NavBar from "./components/NavBar";
import FeaturesCard from "./sections/FeaturesCard";
import { Hero } from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () =>{
    return(
        <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeaturesCard />
        </>
    )
}
export default App;
