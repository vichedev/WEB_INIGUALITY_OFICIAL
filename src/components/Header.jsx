import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/contactos", label: "Contactos" },
];

const WHATSAPP = "https://wa.link/3nnc8b";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
      isActive
        ? "text-white bg-primary shadow-md shadow-sky-500/30"
        : "text-slate-600 hover:text-primary hover:bg-sky-50"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-lg shadow-slate-900/5"
          : "bg-white/95"
      }`}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <Link to="/" aria-label="Ir al inicio" onClick={() => setMenuOpen(false)}>
          <img
            src="/iniguality.svg"
            alt="Logo de InigualitySoft"
            className="w-auto h-10 sm:h-12"
          />
        </Link>

        {/* Navegación escritorio */}
        <nav className="items-center hidden gap-2 xl:flex" aria-label="Principal">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="items-center hidden gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-full xl:inline-flex bg-gradient-to-r from-primary to-relevo hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
        >
          <FaWhatsapp size={18} /> Cotiza tu proyecto
        </a>

        {/* Botón móvil */}
        <button
          type="button"
          className="p-2.5 transition rounded-full xl:hidden bg-sky-50 text-primary hover:bg-sky-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 top-20 xl:hidden bg-gradient-to-b from-slate-900 to-sky-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-3 px-6 pt-12" aria-label="Móvil">
              {links.map(({ to, label, end }, i) => (
                <motion.div
                  key={to}
                  className="w-full max-w-xs"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={to}
                    end={end}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-semibold text-center rounded-2xl transition ${
                        isActive
                          ? "bg-cyan-300 text-slate-900"
                          : "text-white bg-white/10 hover:bg-white/20"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full max-w-xs gap-2 py-3 mt-4 text-lg font-bold text-white bg-green-500 rounded-2xl"
              >
                <FaWhatsapp /> Escríbenos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
