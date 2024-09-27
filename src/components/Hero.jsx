import React, { useEffect, useRef } from "react";
import { FaReact, FaVuejs, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAstro } from "react-icons/si"; // Importar el ícono de Astro

// Componente Hero
const Hero = () => {
  const imgRef = useRef(null); // Referencia para la imagen del héroe
  const smallImgRef = useRef(null); // Referencia para la imagen de fondo
  const waveRef = useRef(null); // Nueva referencia para la ola

  // Almacenar posiciones de los íconos
  const icons = useRef(
    Array.from({ length: 10 }, (_, index) => ({
      component: (
        <>
          {index % 6 === 0 && <FaReact color="#61DBFB" size={60} />}
          {index % 6 === 1 && <SiAstro color="#FF5C00" size={60} />}{" "}
          {/* Ícono de Astro */}
          {index % 6 === 2 && <FaVuejs color="#41B883" size={60} />}
          {index % 6 === 3 && <FaNodeJs color="#8CC84B" size={60} />}{" "}
          {/* Ícono de Node.js */}
          {index % 6 === 4 && <FaHtml5 color="#E44D26" size={60} />}
          {index % 6 === 5 && <FaCss3Alt color="#1572B6" size={60} />}
        </>
      ),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360, // Rotación inicial
    }))
  );

  const handleScroll = () => {
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

      // Animar la imagen de fondo
      if (smallImgRef.current) {
        const translateY = scrollY * 0.05; // Efecto de desplazamiento ligero
        smallImgRef.current.style.transform = `translateY(${translateY}px) scale(0.8)`; // Ajusta el tamaño
      }

      // Animar la ola con movimiento sutil
      if (waveRef.current) {
        const waveTranslateY = Math.sin(scrollY * 0.005) * 10; // Aumentar el movimiento suave
        waveRef.current.style.transform = `translateY(${waveTranslateY}px)`; // Ajusta la ola
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      icons.current = icons.current.map((icon) => ({
        ...icon,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360, // Nueva rotación aleatoria
      }));
      // Forzar un re-render para actualizar las posiciones
      setIcons([...icons.current]);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const [iconsState, setIcons] = React.useState(icons.current);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-[10vh] bg-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/public/img/Hero/fondo.png" // Cambia esto por la ruta de tu imagen de fondo
          alt="Fondo"
          className="w-full h-full object-cover" // Asegúrate de cubrir todo el fondo
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
              opacity: 0.8, // Ajustar la opacidad para una apariencia más suave
              zIndex: -1, // Asegurar que los iconos estén detrás del contenido
            }}
          >
            {icon.component}
          </div>
        ))}
      </div>

      {/* Imagen de fondo desplazada a la derecha, visible solo en desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/public/img/Hero/iniguality.png" // Cambia esto por la ruta de tu imagen
          alt="Fondo"
          className="w-full h-full object-cover transform translate-x-1/4" // Desplazamiento a la derecha
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-10 px-6 relative z-10">
        <div className="text-left flex-1">
          <h1 className="text-4xl xl:text-6xl font-bold text-primary mb-4 drop-shadow-lg">
            <span className="block">¡BIENVENIDOS A!</span> {/* Primera línea */}
            <span className="block">INIGUALITYSOFT</span> {/* Segunda línea */}
          </h1>
          <p className="text-lg xl:text-xl text-gray-700 mb-6 drop-shadow-lg">
            Innovación y calidad en cada uno de nuestros productos.
          </p>
          <button className="bg-cyan-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Descubre Más
          </button>
        </div>

        {/* Imagen del héroe que solo se muestra en móvil */}
        <div className="flex-1 md:hidden">
          <img
            src="/public/img/Hero/hero.png" // Cambia esto por la ruta de tu imagen
            alt="Imagen del Hero"
            ref={imgRef}
            className="w-full h-auto max-w-[500px] transition-opacity duration-300" // Hacer la imagen más visible
          />
        </div>
      </div>

      {/* Ola de fondo */}
      <svg
        ref={waveRef}
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 200" // Ajustar la altura de la ola
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#B3E5FC", stopOpacity: 1 }} // Azul claro
            />
            <stop
              offset="100%"
              style={{ stopColor: "#81D4FA", stopOpacity: 1 }} // Azul oscuro
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,64L30,85.3C60,107,120,149,180,170.7C240,192,300,192,360,186.7C420,181,480,171,540,160C600,149,660,138,720,128C780,118,840,107,900,117.3C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,149.3C1320,128,1380,96,1410,85.3L1440,75L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
