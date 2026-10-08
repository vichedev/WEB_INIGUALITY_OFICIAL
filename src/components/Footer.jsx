import { Link } from "react-router-dom";
import { FaTiktok, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/contactos", label: "Contactos" },
];

const socials = [
  {
    Icon: FaTiktok,
    label: "TikTok",
    href: "https://www.tiktok.com/@iniguality?is_from_webapp=1&sender_device=pc",
  },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.link/3nnc8b" },
];

const Footer = () => (
  <footer className="relative overflow-hidden text-slate-300 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
    <div className="absolute rounded-full pointer-events-none -top-32 -right-32 w-96 h-96 bg-cyan-500/10 blur-3xl" />

    <div className="container relative z-10 grid gap-10 px-6 py-14 mx-auto text-left md:grid-cols-2 lg:grid-cols-4">
      <div className="lg:col-span-2">
        <img
          src="/inigualityWhite.svg"
          alt="Logo de Inigualitysoft"
          className="w-auto h-14 mb-4"
        />
        <p className="max-w-sm mb-5 text-slate-400">
          Software a la medida, sistemas y páginas web con innovación y calidad.
          <span className="block mt-2 italic font-semibold text-sky-300">
            "Tu éxito es nuestra misión"
          </span>
        </p>
        <div className="flex gap-3">
          {socials.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visítanos en ${label}`}
              className="p-3 text-xl transition rounded-full bg-white/5 hover:bg-cyan-400 hover:text-slate-900 hover:-translate-y-1"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-white">Explora</h2>
        <ul className="space-y-2">
          {nav.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="transition hover:text-cyan-300">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://ispmax.ec/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              ISPMAX <FaExternalLinkAlt size={11} />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold text-white">Contáctanos</h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <AiOutlineMail className="text-cyan-300" />
            <a href="mailto:info@inigualitysoft.com" className="break-all hover:text-cyan-300">
              info@inigualitysoft.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaWhatsapp className="text-cyan-300" />
            <a href="tel:+593991031784" className="hover:text-cyan-300">
              +593 99 103 1784
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="relative z-10 py-5 text-sm text-center border-t border-white/10 text-slate-500">
      © {new Date().getFullYear()} Inigualitysoft. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
