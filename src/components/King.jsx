import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaCog,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const slides = [
  {
    Icon: FaCheckCircle,
    title: "Calidad Garantizada",
    text: "Soluciones de alta calidad que cumplen los estándares más exigentes.",
    image: "/img/Kings/garantia.webp",
  },
  {
    Icon: FaStar,
    title: "Innovación Constante",
    text: "Siempre a la vanguardia de las últimas tecnologías para ofrecerte lo mejor.",
    image: "/img/Kings/innovar.webp",
  },
  {
    Icon: FaShieldAlt,
    title: "Seguridad y Confianza",
    text: "Soluciones seguras y confiables que protegen tus datos.",
    image: "/img/Kings/seguridad.webp",
  },
  {
    Icon: FaUsers,
    title: "Equipo Profesional",
    text: "Expertos en desarrollo, diseño y optimización trabajando para ti.",
    image: "/img/Kings/equipo.webp",
  },
  {
    Icon: FaLightbulb,
    title: "Soluciones Personalizadas",
    text: "Software a medida, adaptado a tus necesidades.",
    image: "/img/Kings/personalizado.webp",
  },
  {
    Icon: FaCog,
    title: "Mantenimiento Proactivo",
    text: "Tu software siempre actualizado y en óptimas condiciones.",
    image: "/img/Kings/mantenimiento.webp",
  },
];

const King = () => (
  <section className="relative px-6 py-24 bg-gradient-to-b from-sky-50 to-white">
    <SectionTitle
      eyebrow="Ventajas"
      title="¿Por qué"
      highlight="elegirnos?"
      subtitle="Las razones que nos hacen destacar en el desarrollo de software y tecnología."
    />

    <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {slides.map(({ Icon, title, text, image }, index) => (
        <motion.article
          key={title}
          className="overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <span className="absolute inline-flex items-center justify-center w-12 h-12 text-xl text-white shadow-lg bottom-3 left-4 rounded-2xl bg-gradient-to-br from-primary to-relevo">
              <Icon />
            </span>
          </div>
          <div className="p-6 text-left">
            <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default King;
