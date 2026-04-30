import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/approach", label: "Our Approach" },
  { to: "/sectors", label: "Our Sectors" },
  { to: "/projects", label: "Our Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(11, 31, 58, 0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "rgba(184,115,51,0.25)",
      }}
    >
      <div className="roca-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Roca Group home">
          <span className="block w-1.5 h-1.5 bg-roca-copper" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-roca-white font-bold text-[28px] md:text-[32px] tracking-tight">roca</span>
            <span className="font-label text-roca-copper text-[11px] md:text-[12px] tracking-[0.2em] -mt-0.5">group</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="hidden lg:inline-flex btn-outline-copper !py-3 !px-5 text-[12px]">
          Request a Consultation
        </Link>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-roca-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-roca-navy flex flex-col items-start px-8 pt-12 gap-6 animate-fade-up">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-display text-[40px] leading-none ${isActive ? "text-roca-copper" : "text-roca-white"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-copper mt-6">Request a Consultation</Link>
        </div>
      )}
    </header>
  );
}
