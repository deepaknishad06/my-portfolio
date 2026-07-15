import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';
import NotFound from './pages/notfound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
