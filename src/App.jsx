import FeatureCards from "./sections/FeatureCards";
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection/>
      <FeatureCards/>
      <Experience/>
    </>
  );
}

export default App;
