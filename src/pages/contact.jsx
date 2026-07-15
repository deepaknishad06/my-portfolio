import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';
import Footer from '../components/footer/footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import './contact.css';

function ContactPage() {
    return (
        <>
            <Navbar />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default ContactPage;
