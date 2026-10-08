import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import SectionTitle from "./SectionTitle";

const projects = [
  { title: "FactuCash", tag: "Facturación", image: "/img/Productos/Facturacion/1.webp" },
  { title: "ISPMAX", tag: "Sistema ISP", image: "/img/Productos/Isp/1.webp" },
  { title: "Webs personalizadas", tag: "Desarrollo web", image: "/img/Productos/Webs/1.webp" },
  { title: "Hotspot", tag: "Portales cautivos", image: "/img/Productos/hotspot/1.webp" },
  { title: "Diseño gráfico", tag: "Branding", image: "/img/Productos/Diseño/1.webp" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative px-6 py-24 bg-slate-50">
      <SectionTitle
        eyebrow="Portafolio"
        title="Galería de"
        highlight="proyectos"
        subtitle="Explora nuestra galería de proyectos y descubre nuestras soluciones innovadoras."
      />

      <div className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.button
            type="button"
            key={project.title}
            className={`relative overflow-hidden text-left bg-white shadow-lg group rounded-3xl ${
              index === 1 ? "lg:col-span-2" : ""
            }`}
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent group-hover:opacity-100 focus-visible:opacity-100">
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-300">
                {project.tag}
              </span>
              <span className="text-xl font-bold text-white">{project.title}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute p-2 text-white rounded-full top-5 right-5 bg-white/10 hover:bg-white/20"
              onClick={() => setSelected(null)}
            >
              <IoClose size={28} />
            </button>
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
