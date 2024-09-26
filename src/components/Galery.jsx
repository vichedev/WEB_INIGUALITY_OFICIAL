import React, { useState } from "react";
import { motion } from "framer-motion";

// Imágenes para los proyectos
import imgProject1 from "/public/img/Productos/Facturacion/1.png"; // Reemplaza con la ruta real
import imgProject2 from "/public/img/Productos/Isp/1.png"; // Reemplaza con la ruta real
import imgProject3 from "/public/img/Productos/ticket/1.png"; // Reemplaza con la ruta real
import imgProject4 from "/public/img/Productos/wbot/1.png"; // Reemplaza con la ruta real
import imgProject5 from "/public/img/Productos/Webs/1.png"; // Reemplaza con la ruta real

const projects = [
  {
    title: "Proyecto 1",
    image: imgProject1,
  },
  {
    title: "Proyecto 2",
    image: imgProject2,
  },
  {
    title: "Proyecto 3",
    image: imgProject3,
  },
  {
    title: "Proyecto 4",
    image: imgProject4,
  },
  {
    title: "Proyecto 5",
    image: imgProject5,
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto">
        {/* Imagen de título con animación */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }} // Estado inicial
          whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
          exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          <motion.img
            src="/public/img/textos/galeriadeproyectos.png"
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
          Explora nuestra galería de proyectos y descubre nuestras soluciones
          innovadoras.
        </motion.p>

        {/* Galería de imágenes de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl"
              onClick={() => handleImageClick(project.image)}
              whileHover={{ scale: 1.05 }} // Escala al pasar el ratón
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }} // Estado inicial
              whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
              exit={{ opacity: 0, y: 20 }} // Estado al salir de vista
              transition={{ duration: 0.5 }} // Duración de la animación
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para imagen seleccionada */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={selectedImage}
            alt="Imagen del proyecto"
            className="max-w-full max-h-full p-4 rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
