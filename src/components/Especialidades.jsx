import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaSearch,
  FaImage,
  FaBolt,
  FaUniversalAccess,
} from "react-icons/fa";
import { Helmet } from "react-helmet"; // Importar Helmet para SEO

const Especialidades = () => {
  return (
    <section
      className="relative py-20 bg-white overflow-hidden"
      id="especialidades"
    >
      <Helmet>
        <title>Especialidades - InigualitySoft</title>
        <meta
          name="description"
          content="Descubre nuestras especialidades en desarrollo de software, optimización web y más en InigualitySoft."
        />
      </Helmet>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/* Encabezado principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex flex-col items-center mb-10"
        >
          <img
            src="/public/iniguality.svg"
            alt="Logo de InigualitySoft"
            className="w-full h-auto max-w-[600px] mb-6"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Nuestras Especialidades
          </h1>
          <p className="text-lg max-w-2xl mb-6 text-gray-700">
            Nos especializamos en el desarrollo de software a medida y en la
            creación de páginas web atractivas y funcionales, enfocándonos en
            brindar soluciones que se adaptan a tus necesidades.
          </p>
        </motion.div>

        {/* Contenedor central con tres imágenes en columna y contenido a ambos lados */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
          {/* Contenido del lado izquierdo */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            {/* Carta 1 */}
            <motion.article
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 shadow-sm rounded-xl p-6 max-w-xs text-left"
            >
              <div className="flex items-center mb-4">
                <FaReact className="text-blue-500 text-3xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Desarrollo Frontend
                </h2>
              </div>
              <p className="text-gray-600">
                Utilizamos tecnologías como React y Vue.js para crear interfaces
                atractivas, responsivas y eficientes.
              </p>
            </motion.article>

            {/* Carta 2 */}
            <motion.article
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 shadow-sm rounded-xl p-6 max-w-xs text-left"
            >
              <div className="flex items-center mb-4">
                <FaNodeJs className="text-green-500 text-3xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Desarrollo Backend
                </h2>
              </div>
              <p className="text-gray-600">
                Creamos soluciones robustas con Node.js, asegurando un
                rendimiento óptimo y seguro en el servidor.
              </p>
            </motion.article>

            {/* Carta 3 */}
            <motion.article
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 shadow-sm rounded-xl p-6 max-w-xs text-left"
            >
              <div className="flex items-center mb-4">
                <FaBolt className="text-yellow-500 text-3xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Integraciones API
                </h2>
              </div>
              <p className="text-gray-600">
                Especialistas en integrar API de servicios externos,
                garantizando una integración rápida y eficiente.
              </p>
            </motion.article>
          </div>

          {/* Tres imágenes en el centro, en columna */}
          <div className="flex-1 flex flex-col space-y-4 max-w-md">
            <motion.img
              src="/public/img/Especialidades/laptop.webp"
              alt="Desarrollo de software en InigualitySoft"
              loading="lazy" // Lazy loading
              className="w-full h-auto rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src="/public/img/Especialidades/laptop2.webp"
              alt="Equipo de desarrollo trabajando"
              loading="lazy" // Lazy loading
              className="w-full h-auto rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src="/public/img/Especialidades/laptop3.webp"
              alt="Tecnologías de desarrollo"
              loading="lazy" // Lazy loading
              className="w-full h-auto rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Contenido del lado derecho */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Carta 4 */}
            <motion.article
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 shadow-sm rounded-xl p-6 max-w-xs text-left"
            >
              <div className="flex items-center mb-4">
                <FaSearch className="text-yellow-400 text-3xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Optimización Web
                </h2>
              </div>
              <p className="text-gray-600">
                Mejoramos el rendimiento de las páginas web, asegurando tiempos
                de carga rápidos y una experiencia fluida.
              </p>
            </motion.article>

            {/* Carta 5 */}
            <motion.article
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 shadow-sm rounded-xl p-6 max-w-xs text-left"
            >
              <div className="flex items-center mb-4">
                <FaImage className="text-orange-500 text-3xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Optimización de Imágenes
                </h2>
              </div>
              <p className="text-gray-600">
                Reducimos el tamaño de las imágenes sin comprometer la calidad,
                mejorando la velocidad de carga.
              </p>
            </motion.article>

            {/* Carta 6 */}
            <motion.article
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 shadow-sm rounded-xl p-6 max-w-xs text-left"
            >
              <div className="flex items-center mb-4">
                <FaUniversalAccess className="text-red-500 text-3xl mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  SEO y Accesibilidad
                </h2>
              </div>
              <p className="text-gray-600">
                Optimizamos tu sitio web para motores de búsqueda y garantizamos
                que sea accesible para todos los usuarios.
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
