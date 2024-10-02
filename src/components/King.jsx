import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaCog,
} from "react-icons/fa";

// Imágenes para las cartas
import imgQuality from "/public/img/Kings/garantia.webp"; // Reemplaza con la ruta real de la imagen
import imgInnovation from "/public/img/Kings/innovar.webp"; // Reemplaza con la ruta real de la imagen
import imgSecurity from "/public/img/Kings/seguridad.webp"; // Reemplaza con la ruta real de la imagen
import imgTeam from "/public/img/Kings/equipo.webp"; // Reemplaza con la ruta real de la imagen
import imgSolutions from "/public/img/Kings/personalizado.webp"; // Reemplaza con la ruta real de la imagen
import imgCustomization from "/public/img/Kings/mantenimiento.webp"; // Reemplaza con la ruta real de la imagen

const King = () => {
  const slides = [
    {
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
      title: "Calidad Garantizada",
      text: "Nos comprometemos a ofrecer soluciones de alta calidad, cumpliendo con los estándares más exigentes.",
      image: imgQuality,
    },
    {
      icon: <FaStar className="text-yellow-500 text-4xl" />,
      title: "Innovación Constante",
      text: "Nos mantenemos a la vanguardia de las últimas tecnologías para brindarte soluciones innovadoras.",
      image: imgInnovation,
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
      title: "Seguridad y Confianza",
      text: "Nos aseguramos de que todas nuestras soluciones sean seguras y confiables, protegiendo tus datos.",
      image: imgSecurity,
    },
    {
      icon: <FaUsers className="text-purple-500 text-4xl" />,
      title: "Equipo Profesional",
      text: "Contamos con un equipo de expertos en desarrollo, diseño y optimización.",
      image: imgTeam,
    },
    {
      icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
      title: "Soluciones Personalizadas",
      text: "Adaptamos nuestras soluciones a tus necesidades, creando software a medida para ti.",
      image: imgSolutions,
    },
    {
      icon: <FaCog className="text-gray-500 text-4xl" />,
      title: "Mantenimiento Proactivo",
      text: "Nos aseguramos de que tu software esté siempre actualizado y en óptimas condiciones.",
      image: imgCustomization,
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-t from-blue-200 to-blue-100 overflow-hidden">
      {/* Encabezado con animación */}
      <motion.div
        className="container mx-auto text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center">
          <motion.img
            src="/public/img/textos/porqueelegirnos.webp"
            alt="Especialidades"
            loading="lazy" // Lazy loading
            className="w-full h-auto max-w-[500px] mb-6"
          />
        </div>
        <motion.p className="text-lg text-gray-600 max-w-lg mx-auto">
          Descubre las razones que nos hacen destacar en el desarrollo de
          software y tecnología.
        </motion.p>
      </motion.div>

      {/* Grid para mostrar las cartas */}
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:shadow-xl"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // Si el índice es par, desplaza desde la izquierda, si es impar desde la derecha
              }}
              whileInView={{ opacity: 1, x: 0 }} // Vuelve al centro al entrar en vista
              transition={{
                duration: 0.6,
                ease: [0.68, -0.55, 0.27, 1.55],
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.5 }} // Activa animaciones al hacer scroll
            >
              {/* Imagen de la carta */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy" // Lazy loading
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Contenido de la carta */}
              <div className="p-4 text-center">
                <div className="mb-2 flex items-center justify-center bg-gray-100 p-2 rounded-full w-16 h-16 mx-auto">
                  {slide.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-sm">{slide.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default King;
