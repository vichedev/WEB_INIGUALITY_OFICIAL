import React, { useEffect, useRef } from "react";

// Componente Hero
const Hero = () => {
  const imgRef = useRef(null); // Referencia para la imagen del héroe
  const smallImgRef = useRef(null); // Referencia para la imagen de fondo

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
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-[10vh] bg-white">
      {/* Imagen de fondo desplazada a la derecha, visible solo en desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/public/img/Hero/iniguality.png" // Cambia esto por la ruta de tu imagen
          alt="Fondo"
          className="w-full h-full object-cover transform translate-x-1/4" // Desplazamiento a la derecha
        />
      </div>

      {/* Nueva imagen de fondo detrás de la ola, visible solo en desktop */}
      <div className="absolute bottom-20 left-3/4 transform -translate-x-1/2 md:left-1/2 hidden md:block">
        <img
          src="/public/img/Hero/small-image.png" // Cambia esto por la ruta de tu nueva imagen
          alt="Imagen Pequeña"
          ref={smallImgRef}
          className="w-1/2 max-w-[200px] transition-transform duration-300 md:max-w-[300px] md:w-1/3" // Tamaño más pequeño en desktop
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
        <div className="flex-1 md:hidden"> {/* Mostrar solo en móviles */}
          <img
            src="/public/img/Hero/hero.png" // Cambia esto por la ruta de tu imagen
            alt="Imagen del Hero"
            ref={imgRef}
            className="w-full h-auto max-w-[400px] transition-opacity duration-300" // Ajusta el tamaño según sea necesario
          />
        </div>
      </div>

      {/* Ola de fondo */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#67C8E4", stopOpacity: 1 }} // Azul claro
            />
            <stop
              offset="100%"
              style={{ stopColor: "#4B6F9B", stopOpacity: 1 }} // Azul oscuro
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,128L30,133.3C60,139,120,149,180,170.7C240,192,300,224,360,229.3C420,235,480,213,540,186.7C600,160,660,128,720,128C780,128,840,160,900,186.7C960,213,1020,235,1080,224C1140,213,1200,171,1260,160C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
