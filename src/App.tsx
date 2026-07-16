
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import './App.css';
import Header from './components/header/header';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/deepaknishad06' },
  { id: 'contact', label: 'Contact' },
];

const sections = [
  { id: 'home', title: 'Crafting modern web experiences', description: 'I build fast, polished, and scalable applications with the MERN stack and a sharp eye for UX.' },
  { id: 'about', title: 'About me', description: 'I design and ship full-stack products that balance performance, elegance, and maintainability.' },
  { id: 'tech-stack', title: 'Core stack', description: 'React, Node.js, Express, MongoDB, Tailwind, TypeScript, and modern tooling.' },
  { id: 'projects', title: 'Selected work', description: 'From SaaS dashboards to creative digital products, I focus on meaningful user outcomes.' },
  { id: 'skills', title: 'Strengths', description: 'UI engineering, API design, deployment, state management, and thoughtful product iteration.' },
  { id: 'experience', title: 'Experience', description: 'I bring a product mindset to engineering, turning ideas into reliable digital experiences.' },
  { id: 'contact', title: 'Let’s build together', description: 'Open to freelance collaborations, product roles, and ambitious side projects.' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45, rootMargin: '-20% 0px -35% 0px' },
    );

    const targets = document.querySelectorAll('[data-section]');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string, href?: string) => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    const target = document.getElementById(id);
    if (target && lenisRef.current) {
      (lenisRef.current as Lenis).scrollTo(target, { offset: -100 });
    }
  };

  return (
    <div className={`app-shell ${darkMode ? 'dark' : 'light'}`}>
      <Header
        activeSection={activeSection}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
        onNavigate={handleNavigate}
        navItems={navItems}
      />

      <main className="page-content">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            data-section
            className={`content-section ${index % 2 === 0 ? 'section-hero' : ''}`}
          >
            <div className="section-card">
              <p className="eyebrow">{index === 0 ? 'Featured' : 'Portfolio Section'}</p>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <a className="section-link" href={`#${section.id}`} onClick={(event) => { event.preventDefault(); handleNavigate(section.id); }}>
                Explore section
              </a>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
