import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaDev } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./style.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { path: "home", label: "Home" },
        { path: "projects", label: "Projects" },
        { path: "skills", label: "Skills" },
        { path: "writing", label: "Tech Writing" },
        { path: "about", label: "About" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo cursor-pointer">
                    <RouterLink to="/"><FaDev className="logo-icon" />
                    </RouterLink>
                </div>

                <div className="navbar-menu-icon cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </div>

                <div className={`navbar-list ${open ? "active" : ""}`}>
                    {navItems.map((item) => (
                        <div key={item.path} className="navbar-list__item cursor-pointer">
                            {item.path.startsWith("/") ? (
                                <RouterLink to={item.path} onClick={() => setOpen(false)} className="cursor-pointer">
                                    {item.label}
                                </RouterLink>
                            ) : (
                                <ScrollLink
                                    to={item.path}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={() => setOpen(false)}
                                    className="cursor-pointer"
                                >
                                    {item.label}
                                </ScrollLink>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
