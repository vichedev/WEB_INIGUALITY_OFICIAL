import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Imágenes para el slider
import imgQuality from "/public/img/Hero/hero.png"; // Reemplaza con la ruta real de la imagen
import imgInnovation from "/public/img/Hero/hero.png"; // Reemplaza con la ruta real de la imagen
import imgSecurity from "/public/img/Hero/hero.png"; // Reemplaza con la ruta real de la imagen
import imgTeam from "/public/img/Hero/hero.png"; // Reemplaza con la ruta real de la imagen
import imgSolutions from "/public/img/Hero/hero.png"; // Reemplaza con la ruta real de la imagen

const King = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // Ajusta la altura del slider
    arrows: false, // Deshabilitar las flechas de navegación
  };

  const slides = [
    {
      icon: <FaCheckCircle className="text-green-500 text-6xl" />,
      title: "Calidad Garantizada",
      text: "Nos comprometemos a ofrecer soluciones de alta calidad, cumpliendo con los estándares más exigentes.",
      image: imgQuality,
    },
    {
      icon: <FaStar className="text-yellow-500 text-6xl" />,
      title: "Innovación Constante",
      text: "Nos mantenemos a la vanguardia de las últimas tecnologías para brindarte soluciones innovadoras.",
      image: imgInnovation,
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-6xl" />,
      title: "Seguridad y Confianza",
      text: "Nos aseguramos de que todas nuestras soluciones sean seguras y confiables, protegiendo tus datos.",
      image: imgSecurity,
    },
    {
      icon: <FaUsers className="text-purple-500 text-6xl" />,
      title: "Equipo Profesional",
      text: "Contamos con un equipo de expertos en desarrollo, diseño y optimización.",
      image: imgTeam,
    },
    {
      icon: <FaLightbulb className="text-yellow-400 text-6xl" />,
      title: "Soluciones Personalizadas",
      text: "Adaptamos nuestras soluciones a tus necesidades, creando software a medida para ti.",
      image: imgSolutions,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-t from-blue-200 to-blue-100 overflow-hidden">
      {/* Encabezado con animación */}
      <motion.div
        className="container mx-auto text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
        exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <div className="flex justify-center">
          <motion.img
            src="/public/img/textos/porqueelegirnos.png"
            alt="Especialidades"
            className="w-full h-auto max-w-[600px] mb-6"
          />
        </div>
        <motion.p className="text-lg text-gray-600 max-w-xl mx-auto">
          Descubre las razones que nos hacen destacar en el desarrollo de
          software y tecnología.
        </motion.p>
      </motion.div>

      <div className="flex justify-center z-10">
        <Slider {...settings} className="w-full max-w-3xl mx-auto">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: 50 }} // Estado inicial
              whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
              exit={{ opacity: 0, y: 50 }} // Estado al salir de vista
              transition={{ duration: 0.5 }} // Duración de la animación
              viewport={{ once: false }} // Se anima cada vez que entra en vista
            >
              {/* Contenedor principal para cada slide */}
              <div className="flex items-center bg-white p-8 shadow-lg rounded-lg w-full transition-transform duration-300 hover:shadow-xl hover:scale-105">
                {/* Contenedor izquierdo para el icono y el texto */}
                <div className="flex-1 mr-6 text-left">
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0.8 }} // Tamaño inicial
                    whileHover={{ scale: 1.1 }} // Animación al pasar el ratón
                    transition={{ duration: 0.3 }}
                  >
                    {slide.icon}
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-semibold text-gray-800 mb-2"
                    initial={{ opacity: 0, y: -20 }} // Animación inicial
                    whileInView={{ opacity: 1, y: 0 }} // Animación al entrar en vista
                    transition={{ delay: 0.3 }} // Retraso en la animación
                  >
                    {slide.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-lg"
                    initial={{ opacity: 0 }} // Estado inicial
                    whileInView={{ opacity: 1 }} // Estado al entrar en vista
                    transition={{ delay: 0.5 }} // Más retraso para el párrafo
                  >
                    {slide.text}
                  </motion.p>
                </div>

                {/* Imagen a la derecha en su propio div */}
                <div className="flex-1">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto rounded-lg"
                    initial={{ scale: 0.9 }} // Tamaño inicial
                    whileInView={{ scale: 1 }} // Tamaño al entrar en vista
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default King;
