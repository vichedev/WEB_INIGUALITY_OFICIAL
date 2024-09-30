import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // Importamos Helmet

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 pt-32">
      {/* SEO Dinámico con Helmet */}
      <Helmet>
        <title>Contacta con Nosotros - InigualitySoft</title>
        <meta
          name="description"
          content="Contáctanos a través de nuestras redes sociales o envíanos un correo. ¡Estamos aquí para ayudarte!"
        />
        <meta
          name="keywords"
          content="contacto, email, whatsapp, instagram, tiktok, InigualitySoft"
        />
        <link rel="canonical" href="https://www.inigualitysoft.com/contacto" />
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

      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
        exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <motion.img
          src="/public/img/textos/zonadecontactos.webp"
          alt="Zona de Contactos"
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
        ¡Contáctanos directamente a través de nuestras redes sociales!
      </motion.p>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Tarjeta de correo */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-blue-300">
            <AiOutlineMail className="text-5xl text-blue-800" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Enviar un correo
            </h2>
            <p className="text-gray-600 mt-2">
              Contáctanos por email para más información.
            </p>
            <a
              href="mailto:info@inigualitysoft.com"
              className="inline-block mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              target="_blank" // Abrir en nueva ventana
              rel="noopener noreferrer" // Seguridad adicional
              aria-label="Enviar un correo a info@inigualitysoft.com"
            >
              ¡Escríbenos!
            </a>
          </div>
        </div>

        {/* Tarjeta de WhatsApp */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-green-300">
            <FaWhatsapp className="text-5xl text-green-800" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">WhatsApp</h2>
            <p className="text-gray-600 mt-2">
              Chatea con nosotros en tiempo real.
            </p>
            <a
              href="https://wa.link/3nnc8b" // Cambia el número por el correcto
              className="inline-block mt-4 px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar chat en WhatsApp"
            >
              ¡Iniciar Chat!
            </a>
          </div>
        </div>

        {/* Tarjeta de Instagram */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-center h-40 bg-pink-300">
            <FaInstagram className="text-5xl text-pink-800" />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-gray-800">Instagram</h2>
            <p className="text-gray-600 mt-2">
              Síguenos para ver nuestras novedades.
            </p>
            <a
              href="https://www.instagram.com/rednuevaconexion.ec/?hl=es" // Cambia el perfil por el correcto
              className="inline-block mt-4 px-6 py-2 bg-pink-800 text-white rounded-lg hover:bg-pink-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir en Instagram"
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
              href="https://www.tiktok.com/@iniguality?is_from_webapp=1&sender_device=pc" // Cambia el usuario por el correcto
              className="inline-block mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descubrir contenido en TikTok"
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
