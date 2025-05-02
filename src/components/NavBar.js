import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logoGH from '../assets/img/GitHub_Invertocat_Dark.svg';
import logoLI from '../assets/img/InBug-Black.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">M. Elem</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active' : ''}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active' : ''}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active' : ''}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="https://github.com/melem00" target="_blank" rel="noopener noreferrer">
                                <img src={logoGH} alt="GitHub Logo" />
                            </a>
                            <a href="https://linkedin.com/in/melem00" target="_blank" rel="noopener noreferrer">
                                <img src={logoLI} alt="LinkedIn Logo" />
                            </a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>Let's Connect</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};