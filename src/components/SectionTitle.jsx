import { motion } from "framer-motion";

// Encabezado reutilizable: reemplaza las imágenes de título por texto (más liviano y nítido)
const SectionTitle = ({ eyebrow, title, highlight, subtitle, light = false }) => (
  <motion.div
    className="max-w-3xl mx-auto mb-12 text-center"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
  >
    {eyebrow && (
      <span
        className={`inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full ${
          light ? "bg-white/10 text-cyan-200" : "bg-sky-100 text-primary"
        }`}
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={`text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl ${
        light ? "text-white" : "text-slate-900"
      }`}
    >
      {title}{" "}
      {highlight && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-relevo">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && (
      <p
        className={`mt-4 text-lg ${light ? "text-sky-100" : "text-slate-500"}`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
