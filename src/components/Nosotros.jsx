import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaSeedling,
  FaCogs,
  FaRocket,
  FaGlobeAmericas,
  FaHandshake,
  FaLightbulb,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const chapters = [
  {
    Icon: FaSeedling,
    tag: "El origen",
    title: "Una idea nacida en las telecomunicaciones",
    text: "Todo comenzó trabajando de cerca con proveedores de internet. Vimos que las empresas necesitaban herramientas hechas para su realidad, no sistemas genéricos que obligaban a adaptar el negocio al software. Así nació InigualitySoft: de las ganas de resolver problemas reales con tecnología.",
  },
  {
    Icon: FaCogs,
    tag: "El camino",
    title: "Aprendimos construyendo",
    text: "Cada proyecto fue una escuela. Facturación, gestión de clientes, hotspots, páginas web y marcas: fuimos sumando experiencia, afinando procesos y rodeándonos de personas apasionadas por el código, el diseño y la buena atención.",
  },
  {
    Icon: FaRocket,
    tag: "Hoy",
    title: "Un equipo, muchas disciplinas",
    text: "Somos un equipo de desarrolladores, diseñadores y especialistas que trabaja como uno solo. Creamos ISPMAX, FactuCash y soluciones a medida que hoy usan empresas que confían en nosotros para operar cada día.",
  },
  {
    Icon: FaGlobeAmericas,
    tag: "Lo que viene",
    title: "Seguimos creciendo contigo",
    text: "Nuestra meta es clara: llevar tecnología de primer nivel a más negocios, innovar sin descanso y acompañar a cada cliente en su crecimiento. Tu éxito es nuestra misión.",
  },
];

const values = [
  {
    Icon: FaLightbulb,
    title: "Innovación",
    text: "Probamos, aprendemos y mejoramos. Siempre buscamos una mejor manera de hacer las cosas.",
  },
  {
    Icon: FaHandshake,
    title: "Compromiso",
    text: "Tu proyecto es nuestro proyecto. Cumplimos lo que prometemos y te acompañamos después de la entrega.",
  },
  {
    Icon: FaHeart,
    title: "Pasión",
    text: "Amamos lo que hacemos y se nota en el detalle de cada pantalla y cada línea de código.",
  },
];

const Nosotros = () => (
  <div className="overflow-hidden">
    <Helmet>
      <title>Nuestra Historia - InigualitySoft</title>
      <meta
        name="description"
        content="Conoce la historia de InigualitySoft: un equipo apasionado por la tecnología que crea software a medida con innovación y compromiso."
      />
    </Helmet>

    {/* Encabezado */}
    <section className="relative px-6 pt-40 pb-32 text-center bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900">
      <div className="absolute rounded-full pointer-events-none -top-24 -left-24 w-96 h-96 bg-cyan-500/25 blur-3xl animate-blob" />
      <div className="absolute rounded-full pointer-events-none -bottom-24 -right-24 w-96 h-96 bg-indigo-500/25 blur-3xl animate-blob [animation-delay:-7s]" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionTitle
          light
          eyebrow="Sobre nosotros"
          title="La historia de un equipo"
          highlight="inigualable"
          subtitle="Somos personas apasionadas por la tecnología que convierten ideas en software que mueve negocios."
        />
      </div>
      <svg
        className="absolute bottom-0 w-full h-16"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z"
        />
      </svg>
    </section>

    {/* Línea de tiempo */}
    <section className="relative px-6 py-20 bg-white">
      <div className="relative max-w-5xl mx-auto">
        <div
          className="absolute top-0 bottom-0 hidden w-1 rounded-full left-1/2 -translate-x-1/2 md:block bg-gradient-to-b from-primary via-relevo to-indigo-400"
          aria-hidden="true"
        />
        {chapters.map(({ Icon, tag, title, text }, i) => {
          const left = i % 2 === 0;
          return (
            <motion.article
              key={tag}
              className={`relative mb-12 md:w-1/2 ${
                left ? "md:pr-14 md:mr-auto" : "md:pl-14 md:ml-auto"
              }`}
              initial={{ opacity: 0, x: left ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className={`absolute z-10 hidden w-12 h-12 text-white rounded-full shadow-lg md:flex items-center justify-center top-6 bg-gradient-to-br from-primary to-relevo ring-4 ring-white ${
                  left ? "-right-6" : "-left-6"
                }`}
              >
                <Icon />
              </span>
              <div className="p-7 text-left transition-shadow duration-300 bg-white border shadow-lg rounded-3xl border-slate-100 hover:shadow-2xl hover:shadow-sky-500/10">
                <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-bold tracking-widest uppercase rounded-full bg-sky-100 text-primary">
                  <Icon className="md:hidden" /> {tag}
                </span>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="leading-relaxed text-slate-600">{text}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>

    {/* Valores */}
    <section className="px-6 py-20 bg-slate-50">
      <SectionTitle
        eyebrow="Lo que nos mueve"
        title="Nuestros"
        highlight="valores"
        subtitle="Los principios que guían cada proyecto y cada relación con nuestros clientes."
      />
      <div className="grid max-w-5xl gap-6 mx-auto md:grid-cols-3">
        {values.map(({ Icon, title, text }, i) => (
          <motion.div
            key={title}
            className="p-8 text-center transition-all duration-300 bg-white shadow-md rounded-3xl hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="inline-flex items-center justify-center w-16 h-16 mb-5 text-2xl text-white shadow-lg rounded-2xl bg-gradient-to-br from-primary to-relevo">
              <Icon />
            </span>
            <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
            <p className="text-slate-600">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Llamado a la acción */}
    <section className="px-6 py-20 bg-white">
      <motion.div
        className="relative max-w-4xl p-10 mx-auto overflow-hidden text-center text-white shadow-2xl rounded-3xl bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700 md:p-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute rounded-full pointer-events-none -top-20 -right-20 w-72 h-72 bg-cyan-400/25 blur-3xl" />
        <h2 className="relative mb-4 text-3xl font-extrabold md:text-4xl">
          ¿Listo para escribir la siguiente página con nosotros?
        </h2>
        <p className="relative mb-8 text-sky-100">
          Cuéntanos tu idea y la convertimos en una solución a tu medida.
        </p>
        <Link
          to="/contactos"
          className="relative inline-flex items-center gap-2 px-8 py-4 font-bold transition rounded-full text-slate-900 bg-cyan-300 hover:bg-cyan-200 hover:scale-105"
        >
          Hablemos <FaArrowRight />
        </Link>
      </motion.div>
    </section>
  </div>
);

export default Nosotros;
