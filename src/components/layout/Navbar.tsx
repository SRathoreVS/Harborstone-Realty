import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Investments", href: "/investments" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="brand">Harborstone Realty</div>

          {/* Desktop Nav */}
          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.label} to={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="cta">
            Contact Us
          </Link>

          {/* Hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((p) => !p)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="mobile-cta">
          Contact Us
        </a>
      </div>

      {/* Styles */}
      <style>{`
        /* ===== BASE ===== */
        .navbar {
          position: fixed;
          top: 0;
          z-index: 100;
          background: #f3f3f1;
          width: 100%;
        }

        .navbar-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 16px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          font-size: 18px;
          font-weight: 600;
        }

        /* ===== DESKTOP NAV ===== */
        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          font-size: 14px;
          color: #6b6b6b;
          text-decoration: none;
        }

        .nav-links a:hover {
          color: #111;
        }

        .cta {
          background: #111;
          color: #fff;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          text-decoration: none;
        }

        /* ===== HAMBURGER ===== */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: #111;
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #f3f3f1;
          padding: 96px 6% 32px;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          z-index: 90;
        }

        .mobile-menu.open {
          transform: translateY(0);
        }

        .mobile-menu nav {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-menu a {
          font-size: 18px;
          color: #111;
          text-decoration: none;
        }

        .mobile-cta {
          margin-top: 32px;
          display: block;
          text-align: center;
          background: #fff;
          color: #111;
          padding: 16px;
          border-radius: 10px;
          text-decoration: none;
        }

        /* ===== BREAKPOINTS ===== */
        @media (max-width: 1023px) {
          .nav-links,
          .cta {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
