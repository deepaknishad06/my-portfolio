import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import './projects.css';

function ProjectsPage() {
    return (
        <>
            <Navbar />
            <div className="projects-page">
                <h1 className="page-title">All Projects</h1>
                <Projects />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default ProjectsPage;
