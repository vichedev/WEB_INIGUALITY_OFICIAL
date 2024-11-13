import React from "react";
import { motion } from "framer-motion"; // Importar Framer Motion
import { FaGithub, FaInstagram } from "react-icons/fa"; // Importar íconos
import { Helmet } from "react-helmet"; // Importar Helmet para SEO

const developers = [
  {
    name: "Ing Manuel Tandazo Mera",
    role: "CEO",
    description:
      "Líder visionario con más de 10 años de experiencia en la industria de Telecomunicaciones. Apasionado por la innovación y la excelencia en el desarrollo de proyectos.",
    image: "/img/cartas_dev/Manuel.webp", // Ruta de la imagen del CEO
    social: {
      instagram: "https://www.instagram.com/rednuevaconexion.ec/?hl=es",
      github: "https://github.com/ManuelTandazo",
    },
  },
  {
    name: "Ing Ariel Fajardo",
    role: "Fullstack Developer",
    description:
      "Desarrollador Fullstack con experiencia en React y Node.js. Apasionado por la creación de aplicaciones web eficientes y escalables, optimizando la experiencia del usuario y el rendimiento del servidor.",
    image: "/img/cartas_dev/ariel_dev.webp", // Ruta de la imagen de Ariel
    social: {
      instagram: "https://instagram.com",
      github: "https://github.com/Ultimategamer777",
    },
  },
  {
    name: "Ing Ken Aguirre",
    role: "Fullstack Developer",
    description:
      "Desarrollador full stack con sólida experiencia en tecnologías como Node.js y Vue.js. Especializado en la creación de soluciones escalables y eficientes",
    image: "/img/cartas_dev/ken.webp", // Ruta de la imagen de Ken
    social: {
      instagram: "https://instagram.com",
      github: "https://github.com/EdgarLennon",
    },
  },
  {
    name: "Ing Juan Saa",
    role: "Fullstack Developer",
    description:
      "Desarrollador Frontend vuejs, react, especialista en nodejs, nest, laravel tecnologias Backend Siempre en búsqueda de nuevas tecnologías.",
    image: "/img/cartas_dev/juan_dev.webp", // Ruta de la imagen de Juan
    social: {
      instagram:
        "https://www.instagram.com/fernando_saa_?igsh=MTRnOHBibjJvMWxjNg==",
      github: "https://github.com/Ferjebay",
    },
  },
  {
    name: "Ing Vicente Zamora",
    role: "Fullstack Developer",
    description:
      "Diseñador creativo con un enfoque en la experiencia del usuario. Se especializa en interfaces atractivas y funcionales.",
    image: "/img/cartas_dev/vice_dev.webp", // Ruta de la imagen de Vicente
    social: {
      instagram: "https://instagram.com",
      github: "https://github.com/vichedev",
    },
  },
];

const colorMap = {
  "Ing Manuel Tandazo Mera": "text-blue-600",
  "Ing Ariel Fajardo": "text-green-600",
  "Ing Ken Aguirre": "text-red-600",
  "Ing Juan Saa": "text-purple-600",
  "Ing Vicente Zamora": "text-orange-600",
};

const Nosotros = () => {
  return (
    <div className="relative px-4 py-40 md:px-16">
      <Helmet>
        <title>Conoce Nuestro Equipo - InigualitySoft</title>
        <meta
          name="description"
          content="Conoce a nuestro equipo de desarrolladores apasionados y creativos en InigualitySoft. Descubre su experiencia y compromiso con la innovación."
        />
      </Helmet>

      {/* Fondo con degradado */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(173, 216, 230, 0.8), rgba(240, 248, 255, 0.8))",
          animation: "gradient 15s ease infinite",
          backgroundSize: "400% 400%",
          zIndex: -1, // Colocar el fondo detrás de los elementos
        }}
      />
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Imagen de título con animación */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
        exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <motion.img
          src="/img/textos/nuestroequipo.webp"
          alt="Nuestro Equipo de Desarrolladores"
          loading="lazy" // Lazy loading
          className="w-full h-auto max-w-[600px]"
        />
      </motion.div>

      {/* Subtítulo */}
      <motion.p
        className="mb-8 text-lg text-center text-gray-700"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
        exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        Conoce a nuestros desarrolladores, un equipo apasionado que combina
        talento y creatividad para llevar tus ideas a la vida. ¡Descubre lo que
        los motiva y su compromiso con la innovación!
      </motion.p>

      <div className="flex flex-col items-center">
        {/* Centrar las cartas */}
        {developers.map((developer, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 justify-center w-full max-w-6xl p-6 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:scale-105 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`} // Fondo blanco y ligero efecto de vidrio
            initial={{ opacity: 0, y: 50 }} // Estado inicial
            whileInView={{ opacity: 1, y: 0 }} // Estado al estar en vista
            transition={{ duration: 0.6 }} // Duración de la animación
            viewport={{ once: false }} // Permitir que se active varias veces
            style={{ gap: "24px" }} // Añadir el gap entre la imagen y el texto
          >
            {/* Contenedor de la imagen */}
            <div className="w-full md:w-[400px] h-[300px] md:flex-shrink-0 mb-4 md:mb-0">
              <motion.img
                src={developer.image}
                alt={`Imagen de ${developer.name}`}
                loading="lazy" // Lazy loading
                className="object-cover w-full h-full transition-transform duration-300 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }} // Efecto hover para la imagen
              />
            </div>

            {/* Contenedor del texto */}
            <div className={`text-left flex flex-col`}>
              <h2
                className={`${
                  colorMap[developer.name]
                } text-2xl font-semibold transition-colors duration-300 hover:text-gray-500`}
              >
                {developer.name}
              </h2>
              <p className="text-gray-600">{developer.role}</p>
              <p className="mt-2 text-justify text-gray-500">
                {developer.description}
              </p>
              {/* Iconos de redes sociales */}
              <div className="flex mt-4 space-x-4">
                <a
                  href={developer.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Perfil de GitHub de ${developer.name}`} // Añadido para accesibilidad
                  className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={developer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Perfil de Instagram de ${developer.name}`} // Añadido para accesibilidad
                  className="text-gray-600 transition-colors duration-300 hover:text-pink-600"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;
