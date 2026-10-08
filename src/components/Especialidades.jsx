import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaSearch,
  FaImage,
  FaBolt,
  FaUniversalAccess,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import SectionTitle from "./SectionTitle";

const items = [
  {
    Icon: FaReact,
    color: "from-sky-400 to-blue-600",
    title: "Desarrollo Frontend",
    text: "Utilizamos React y Vue.js para crear interfaces atractivas, responsivas y eficientes.",
  },
  {
    Icon: FaNodeJs,
    color: "from-green-400 to-emerald-600",
    title: "Desarrollo Backend",
    text: "Soluciones robustas con Node.js, con rendimiento óptimo y seguro en el servidor.",
  },
  {
    Icon: FaBolt,
    color: "from-yellow-300 to-orange-500",
    title: "Integraciones API",
    text: "Integramos APIs de servicios externos de forma rápida y eficiente.",
  },
  {
    Icon: FaSearch,
    color: "from-indigo-400 to-purple-600",
    title: "Optimización Web",
    text: "Mejoramos el rendimiento de tu sitio: tiempos de carga rápidos y experiencia fluida.",
  },
  {
    Icon: FaImage,
    color: "from-orange-400 to-red-500",
    title: "Optimización de Imágenes",
    text: "Reducimos el peso de las imágenes sin perder calidad para cargar más rápido.",
  },
  {
    Icon: FaUniversalAccess,
    color: "from-rose-400 to-pink-600",
    title: "SEO y Accesibilidad",
    text: "Posicionamos tu sitio en buscadores y lo hacemos accesible para todos.",
  },
];

const Especialidades = () => (
  <section className="relative px-6 py-24 overflow-hidden bg-white" id="especialidades">
    <Helmet>
      <title>Especialidades - InigualitySoft</title>
      <meta
        name="description"
        content="Descubre nuestras especialidades en desarrollo de software, optimización web y más en InigualitySoft."
      />
    </Helmet>

    <SectionTitle
      eyebrow="Qué hacemos"
      title="Nuestras"
      highlight="especialidades"
      subtitle="Software a medida y páginas web atractivas y funcionales, pensadas para las necesidades de tu negocio."
    />

    <div className="grid items-center max-w-6xl gap-8 mx-auto lg:grid-cols-3">
      <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
        {items.map(({ Icon, color, title, text }, i) => (
          <motion.article
            key={title}
            className="p-7 text-left transition-all duration-300 bg-white border shadow-md group rounded-3xl border-slate-100 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
          >
            <span
              className={`inline-flex items-center justify-center w-14 h-14 mb-4 text-2xl text-white shadow-lg rounded-2xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform`}
            >
              <Icon />
            </span>
            <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
            <p className="text-slate-600">{text}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/img/Especialidades/laptop.webp"
          alt="Desarrollo de software en InigualitySoft"
          loading="lazy"
          className="w-full h-auto shadow-2xl rounded-3xl"
        />
      </motion.div>
    </div>
  </section>
);

export default Especialidades;
