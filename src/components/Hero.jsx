import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Componente Hero
const Hero = () => {
  const imgRef = useRef(null);
  const smallImgRef = useRef(null);
  const waveRef = useRef(null);
  const [iconsState, setIcons] = useState(() => createInitialIcons(10));

  function createInitialIcons(count) {
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
  }

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/public/img/Hero/fondo.webp";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const imgOffsetTop = imgRef.current.offsetTop;

        const opacity = Math.max(
          0,
          Math.min(1, (windowHeight - scrollY + imgOffsetTop) / windowHeight)
        );
        imgRef.current.style.opacity = opacity;

        const scale = Math.max(0.8, 1 - scrollY / 1000);
        imgRef.current.style.transform = `scale(${scale})`;

        if (smallImgRef.current) {
          const translateY = scrollY * 0.05;
          smallImgRef.current.style.transform = `translateY(${translateY}px) scale(0.8)`;
        }

        if (waveRef.current) {
          const waveTranslateY = Math.sin(scrollY * 0.005) * 10;
          waveRef.current.style.transform = `translateY(${waveTranslateY}px)`;
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Nueva función para el desplazamiento suave
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
          alt="Fondo creativo de InigualitySoft"
          className="w-full h-full object-cover"
          loading="eager" // Carga inmediata
        />
      </div>

      {/* Iconos en el fondo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {iconsState.map((icon, index) => (
          <div
            key={index}
            className="absolute transition-all duration-1000"
            style={{
              transform: `translate(${icon.x}px, ${icon.y}px) rotate(${icon.rotation}deg)`,
              opacity: 0.8,
              zIndex: -1,
            }}
          >
            {icon.component}
          </div>
        ))}
      </div>

      {/* Imagen de fondo desplazada a la derecha */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/public/img/Hero/iniguality.webp"
          alt="Equipo de InigualitySoft trabajando"
          className="w-full h-full object-cover transform translate-x-1/4"
          loading="lazy" // Lazy loading para la imagen no crítica
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 px-6 relative z-10">
        <div className="text-left flex-1">
          <motion.h1
            className="text-4xl xl:text-6xl font-bold text-primary mb-4 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <span className="block">¡BIENVENIDOS A</span>
            <span className="block">INIGUALITYSOFT!</span>
          </motion.h1>

          <motion.p
            className="text-lg xl:text-xl text-gray-700 mb-6 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovación y calidad en cada uno de nuestros productos.
          </motion.p>

          <motion.button
            aria-label="Descubre más sobre InigualitySoft"
            className="bg-cyan-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToEspecialidades} // Cambiar el onClick para usar scrollToEspecialidades
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
            alt="Equipo de desarrollo en InigualitySoft"
            ref={imgRef}
            className="w-full h-auto max-w-[500px] transition-opacity duration-300"
            loading="lazy" // Lazy loading
          />
        </div>
      </div>

      {/* Ola de fondo con gradiente mejorado */}
      <svg
        ref={waveRef}
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 210"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#B3E5FC", stopOpacity: 1 }} // Azul claro
            />
            <stop
              offset="100%"
              style={{ stopColor: "#81D4FA", stopOpacity: 1 }} // Azul más oscuro
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,160L30,154.7C60,149,120,138,180,133.3C240,128,300,128,360,138.7C420,149,480,171,540,186.7C600,203,660,213,720,213.3C780,213,840,203,900,176C960,149,1020,107,1080,96C1140,85,1200,107,1260,138.3C1320,171,1380,213,1410,234.7L1440,256L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
