import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaRocket,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import { SiAstro, SiNestjs, SiLaravel, SiTailwindcss } from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i },
  }),
};

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "100%", label: "Software a medida" },
  { value: "24/7", label: "Soporte a clientes" },
];

const techs = [
  { Icon: FaReact, color: "#61DBFB", name: "React" },
  { Icon: FaVuejs, color: "#41B883", name: "Vue" },
  { Icon: FaNodeJs, color: "#8CC84B", name: "Node.js" },
  { Icon: SiNestjs, color: "#E0234E", name: "NestJS" },
  { Icon: SiLaravel, color: "#FF2D20", name: "Laravel" },
  { Icon: SiAstro, color: "#FF5C00", name: "Astro" },
  { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind" },
  { Icon: FaHtml5, color: "#E44D26", name: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
];

const scrollToEspecialidades = () => {
  document
    .getElementById("especialidades")
    ?.scrollIntoView({ behavior: "smooth" });
};

const slides = [{ id: "logo" }, { id: "ispmax" }];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [paused]);

  const current = slides[index].id;

  return (
    <motion.div
      className="relative w-full max-w-xl mx-auto"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/40 to-indigo-500/40 blur-2xl" />

      <div className="relative overflow-hidden border shadow-2xl aspect-[16/11] rounded-3xl border-white/20 bg-white/10 backdrop-blur animate-float">
        <AnimatePresence mode="wait">
          {current === "logo" ? (
            <motion.div
              key="logo"
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 bg-white"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/iniguality.png"
                alt="Logo de InigualitySoft"
                className="w-4/5 h-auto max-h-[70%] object-contain"
                fetchpriority="high"
              />
              <p className="text-sm font-semibold tracking-widest uppercase text-primary">
                Tu éxito es nuestra misión
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="ispmax"
              className="absolute inset-0 flex flex-col bg-slate-900"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/90">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
                <a
                  href="https://ispmax.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-0.5 mx-auto text-xs rounded-full bg-white/10 text-sky-200 hover:bg-white/20"
                >
                  ispmax.ec
                </a>
              </div>
              <img
                src="/img/Productos/Isp/1.webp"
                alt="Sistema ISPMAX"
                className="object-cover w-full min-h-0 grow"
              />
              <span className="absolute inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase bg-yellow-300 rounded-full left-4 bottom-4 text-slate-900">
                <FaStar /> Producto estrella
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tarjetas flotantes (solo escritorio) */}
      {current === "ispmax" && (
        <>
          <div className="absolute items-center hidden gap-3 px-4 py-3 text-sm text-left bg-white shadow-xl xl:flex -right-4 top-16 rounded-2xl">
            <span className="p-2 rounded-xl bg-sky-100 text-primary">
              <FaShieldAlt />
            </span>
            <span>
              <strong className="block text-slate-900">Seguro y confiable</strong>
              <span className="text-slate-500">Tus datos protegidos</span>
            </span>
          </div>
          <div className="absolute items-center hidden gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full shadow-xl xl:flex -right-2 -bottom-3 bg-gradient-to-r from-primary to-relevo">
            <FaBolt /> Rápido y escalable
          </div>
        </>
      )}

      {/* Controles */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ver diapositiva ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-cyan-300" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Hero = () => (
  <section className="relative flex flex-col justify-center min-h-screen pt-20 overflow-hidden bg-slate-950">
    <Helmet>
      <title>InigualitySoft - Innovación en Software</title>
      <meta
        name="description"
        content="InigualitySoft ofrece soluciones innovadoras en software para empresas de todo el mundo."
      />
    </Helmet>

    {/* Fondo aurora (solo CSS) */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900" />
    <div className="absolute rounded-full pointer-events-none -top-32 -left-32 w-[36rem] h-[36rem] bg-cyan-500/25 blur-3xl animate-blob" />
    <div className="absolute rounded-full pointer-events-none top-1/3 -right-40 w-[32rem] h-[32rem] bg-sky-500/25 blur-3xl animate-blob [animation-delay:-6s]" />
    <div className="absolute rounded-full pointer-events-none -bottom-40 left-1/3 w-[28rem] h-[28rem] bg-indigo-500/20 blur-3xl animate-blob [animation-delay:-10s]" />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
      }}
    />

    {/* Contenido */}
    <div className="container relative z-10 grid items-center gap-12 px-6 py-12 mx-auto xl:grid-cols-2">
      <div className="text-center xl:text-left">
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-cyan-100 border rounded-full border-cyan-300/30 bg-white/10 backdrop-blur"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          <FaRocket className="text-cyan-300" /> Software y soluciones digitales
        </motion.span>

        <motion.h1
          className="mb-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl 2xl:text-7xl"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Tecnología{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300">
            inigualable
          </span>{" "}
          para tu negocio
        </motion.h1>

        <motion.p
          className="max-w-xl mx-auto mb-8 text-lg text-sky-100/90 xl:mx-0 xl:text-xl"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Bienvenido a <strong className="text-white">InigualitySoft</strong>.
          Creamos sistemas, páginas web y herramientas a la medida, con
          innovación y calidad en cada producto.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row xl:justify-start sm:justify-center"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInUp}
        >
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 rounded-full shadow-lg text-slate-900 bg-gradient-to-r from-cyan-300 to-sky-300 shadow-cyan-500/30 hover:scale-105"
          >
            Ver productos <FaArrowRight />
          </Link>
          <button
            type="button"
            aria-label="Descubre más sobre InigualitySoft"
            onClick={scrollToEspecialidades}
            className="px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 hover:scale-105"
          >
            ¡Descubre más!
          </button>
        </motion.div>

        <motion.dl
          className="grid max-w-md grid-cols-3 gap-4 mx-auto mt-12 xl:mx-0"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeInUp}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="pl-4 text-left border-l-2 border-cyan-400/60">
              <dt className="text-2xl font-extrabold text-white sm:text-3xl">
                {value}
              </dt>
              <dd className="mt-1 text-xs text-sky-200 sm:text-sm">{label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Slider: logo -> producto estrella */}
      <HeroSlider />
    </div>

    {/* Cinta de tecnologías */}
    <div className="relative z-10 py-5 mb-16 overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="flex w-max animate-marquee">
        {[...techs, ...techs].map(({ Icon, color, name }, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-3 mx-8 text-sky-100/80"
          >
            <Icon color={color} size={28} />
            <span className="font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Ola inferior */}
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
);

export default Hero;
