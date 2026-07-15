import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/footer';
import './notfound.css';

function NotFound() {
    return (
        <>
            <Navbar />
            <div className="notfound">
                <div className="notfound-content">
                    <h1 className="notfound-code">404</h1>
                    <h2 className="notfound-title">Page Not Found</h2>
                    <p className="notfound-message">Sorry, the page you're looking for doesn't exist.</p>
                    <Link to="/" className="notfound-btn">
                        Go Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFound;
