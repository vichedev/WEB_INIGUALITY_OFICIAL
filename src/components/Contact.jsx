import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 pt-32">
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

      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
        exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <motion.img
          src="/public/img/textos/zonadecontactos.webp"
          alt="Galería de Proyectos"
          className="w-full h-auto max-w-[600px]"
        />
      </motion.div>
      {/* Subtítulo */}
      <motion.p
        className="text-center text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
        exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        Contactate directamente con nosotros en nuestas redes sociales!
      </motion.p>
      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Tarjeta de correo */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-blue-200">
            <AiOutlineMail className="text-5xl text-blue-600" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Enviar un correo
            </h2>
            <p className="text-gray-600 mt-2">
              Contáctanos por email para más información.
            </p>
            <a
              href="mailto:tuemail@example.com"
              className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              target="_blank" // Abrir en nueva ventana
              rel="noopener noreferrer" // Seguridad adicional
            >
              ¡Escríbenos!
            </a>
          </div>
        </div>

        {/* Tarjeta de WhatsApp */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-green-200">
            <FaWhatsapp className="text-5xl text-green-600" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">WhatsApp</h2>
            <p className="text-gray-600 mt-2">
              Chatea con nosotros en tiempo real.
            </p>
            <a
              href="https://wa.me/123456789" // Cambia el número por el correcto
              className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Iniciar Chat!
            </a>
          </div>
        </div>

        {/* Tarjeta de Instagram */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-pink-200">
            <FaInstagram className="text-5xl text-pink-600" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">Instagram</h2>
            <p className="text-gray-600 mt-2">
              Síguenos para ver nuestras novedades.
            </p>
            <a
              href="https://www.instagram.com/tu_perfil" // Cambia el perfil por el correcto
              className="inline-block mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Síguenos!
            </a>
          </div>
        </div>

        {/* Tarjeta de TikTok */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-black">
            <FaTiktok className="text-5xl text-white" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">TikTok</h2>
            <p className="text-gray-600 mt-2">
              Diviértete con nuestro contenido.
            </p>
            <a
              href="https://www.tiktok.com/@tu_usuario" // Cambia el usuario por el correcto
              className="inline-block mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Descúbrenos!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
