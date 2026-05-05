import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { href: "#", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="navbar">
            <div className="nav-inner">
                <div className="brand">Atmos Racing League</div>

                <button
                    className="toggle-btn"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                </button>

                <nav className={`nav-links ${open ? "open" : ""}`}>
                    {links.map((l) => (
                        <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}