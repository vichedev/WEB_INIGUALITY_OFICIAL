import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Importamos solo Instagram y TikTok

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-200">
      {/* Contenido del footer */}
      <div className="relative container mx-auto px-6 z-10 py-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h2 className="text-3xl font-bold mb-2">Contáctanos</h2>
            <p className="text-lg mb-1">
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
          <div className="flex items-center justify-center mb-6 md:mb-0 w-full md:w-1/3">
            <img
              src="/inigualityWhite.svg" // Asegúrate que esta ruta es correcta
              alt="Logo de Inigualitysoft"
              className="h-20 w-auto"
            />
          </div>

          <div className="mb-6 md:mb-0 w-full md:w-1/3 text-center">
            <h2 className="text-3xl font-bold mb-2">Redes Sociales</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-3xl" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-4">
          <p className="text-lg font-semibold italic">
            "Tu éxito es nuestra misión"
          </p>
        </div>

        {/* Línea de separación */}
        <hr className="my-4 border-gray-600" />

        {/* Copyright */}
        <div className="text-center text-sm py-4 z-10 relative">
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
