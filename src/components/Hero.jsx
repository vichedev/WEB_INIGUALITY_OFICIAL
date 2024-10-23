import React, { useEffect, useState } from "react";
import { FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

// Componente memoizado para los íconos
const IconComponent = React.memo(({ icon, x, y, rotation }) => (
  <motion.div
    className="absolute"
    style={{ transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.8 }}
    transition={{ duration: 1 }}
  >
    {icon}
  </motion.div>
));

const Hero = () => {
  const navigate = useNavigate();
  const [iconsState, setIcons] = useState([]);

  useEffect(() => {
    // Preload para la imagen LCP
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/public/img/Hero/fondo.webp";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const createInitialIcons = (count) => {
      return Array.from({ length: count }, (_, index) => ({
        component: (
          <>
            {index % 6 === 0 && <FaReact color="#61DBFB" size={60} />}
            {index % 6 === 1 && <SiAstro color="#FF5C00" size={60} />}
            {index % 6 === 2 && <FaVuejs color="#41B883" size={60} />}
            {index % 6 === 3 && <FaNodeJs color="#8CC84B" size={60} />}
            {index % 6 === 4 && <FaHtml5 color="#E44D26" size={60} />}
            {index % 6 === 5 && <FaCss3Alt color="#1572B6" size={60} />}
          </>
        ),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
      }));
    };

    setIcons(createInitialIcons(10));
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToEspecialidades = () => {
    const element = document.getElementById("especialidades");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-[10vh] bg-white">
      <Helmet>
        <title>InigualitySoft - Innovación en Software</title>
        <meta
          name="description"
          content="InigualitySoft ofrece soluciones innovadoras en software para empresas de todo el mundo."
        />
      </Helmet>

      {/* Imagen de fondo optimizada */}
      <div className="absolute inset-0">
        <img
          src="/public/img/Hero/fondo.webp"
          srcSet="/public/img/Hero/fondomobile.jpg 600w, /public/img/Hero/fondo.jpg 1200w"
          sizes="(max-width: 600px) 600px, 1200px"
          alt="Fondo creativo de InigualitySoft"
          className="object-cover w-full h-full"
          loading="eager"
        />
      </div>

      {/* Iconos en el fondo */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {iconsState.map((icon, index) => (
          <IconComponent
            key={index}
            icon={icon.component}
            x={icon.x}
            y={icon.y}
            rotation={icon.rotation}
          />
        ))}
      </div>

      {/* Imagen de fondo desplazada a la derecha */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/public/img/Hero/iniguality.webp"
          srcSet="/public/img/Hero/initable.png 600w, /public/img/Hero/ini.png 1200w"
          sizes="(max-width: 600px) 600px, 1200px"
          alt="Equipo de InigualitySoft trabajando"
          className="object-cover w-full h-full transform translate-x-1/4"
          loading="lazy"
        />
      </div>

      {/* Contenido principal */}
      <div className="container relative z-10 flex flex-col items-center justify-between gap-10 px-6 mx-auto xl:flex-row">
        <div className="flex-1 text-left">
          <motion.h1
            className="mb-4 text-4xl font-bold xl:text-6xl text-primary drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <span className="block">¡BIENVENIDOS A</span>
            <span className="block">INIGUALITYSOFT!</span>
          </motion.h1>

          <motion.p
            className="mb-6 text-lg text-gray-700 xl:text-xl drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovación y calidad en cada uno de nuestros productos.
          </motion.p>

          <motion.button
            aria-label="Descubre más sobre InigualitySoft"
            className="px-8 py-4 text-white transition-all duration-300 transform rounded-full shadow-lg bg-cyan-700 hover:shadow-xl hover:scale-105"
            onClick={scrollToEspecialidades}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ¡Descubre más!
          </motion.button>
        </div>

        {/* Imagen del héroe que solo se muestra en móvil */}
        <div className="flex-1 md:hidden">
          <img
            src="/public/img/Hero/hero.webp"
            srcSet="/public/img/Hero/mobilehero.png 400w, /public/img/Hero/hero_large.webp 800w"
            sizes="(max-width: 600px) 400px, 800px"
            alt="Equipo de desarrollo en InigualitySoft"
            className="w-full h-auto max-w-[500px] transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Ola de fondo con gradiente mejorado */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 210"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#B3E5FC", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#81D4FA", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,64L30,85.3C60,107,120,149,180,170.7C240,192,300,192,360,186.7C420,181,480,171,540,160C600,149,660,138,720,128C780,118,840,107,900,117.3C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,149.3C1320,128,1380,96,1410,85.3L1440,75L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
