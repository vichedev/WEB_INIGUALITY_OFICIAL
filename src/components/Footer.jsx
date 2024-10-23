import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Importamos solo Instagram y TikTok

const Footer = () => {
  return (
    <footer className="relative text-gray-200 bg-gray-900">
      {/* Contenido del footer */}
      <div className="container relative z-10 px-6 py-10 mx-auto">
        {/* Sección de contacto, logo y redes sociales */}
        <motion.div
          className="grid items-center grid-cols-1 gap-6 mb-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sección de contacto */}
          <div className="w-full text-center md:text-left">
            <h2 className="mb-2 text-3xl font-bold">Contáctanos</h2>
            <p className="mb-1 text-lg">
              Email:{" "}
              <a
                href="mailto:info@inigualitysoft.com"
                className="text-blue-400 hover:underline"
              >
                info@inigualitysoft.com
              </a>
            </p>
            <p className="text-lg">
              Teléfono:{" "}
              <a
                href="tel:+593991031784"
                className="text-blue-400 hover:underline"
              >
                +593 99 103 1784
              </a>
            </p>
          </div>

          {/* Logo de la empresa */}
          <div className="flex items-center justify-center">
            <img
              src="/inigualityWhite.svg" // Asegúrate que esta ruta es correcta
              alt="Logo de Inigualitysoft"
              className="w-auto h-20"
            />
          </div>

          {/* Sección de redes sociales */}
          <div className="w-full text-center md:ml-11">
            <h2 className="mb-2 text-3xl font-bold">Redes Sociales</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/rednuevaconexion.ec/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visítanos en Instagram"
              >
                <FaInstagram className="text-3xl text-gray-400 transition-colors duration-300 hover:text-blue-300" />
              </a>
              <a
                href="https://www.tiktok.com/@iniguality?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visítanos en TikTok"
              >
                <FaTiktok className="text-3xl text-gray-400 transition-colors duration-300 hover:text-blue-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Frase motivacional */}
        <div className="mb-4 text-center">
          <p className="text-lg italic font-semibold">
            "Tu éxito es nuestra misión"
          </p>
        </div>

        {/* Línea de separación */}
        <hr className="my-4 border-gray-600" />

        {/* Copyright */}
        <div className="relative z-10 py-4 text-sm text-center">
          <p>
            © {new Date().getFullYear()} Inigualitysoft. Todos los derechos
            reservados.
          </p>
        </div>
      </div>

      <style jsx>{`
        footer {
          position: relative;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
