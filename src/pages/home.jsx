import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Services from '../components/Services/Services';
import Timeline from '../components/Timeline/Timeline';
import GitHub from '../components/GitHub/GitHub';
import Contact from '../components/Contact/Contact';
import Footer from '../components/footer/footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Skills />
            <Services />
            <Timeline />
            <GitHub />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Home;
