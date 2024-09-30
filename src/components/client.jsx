import React from "react";
import { motion } from "framer-motion";

// Imágenes de los logos de los clientes
import logo1 from "/public/img/clientes/red.webp";
import logo2 from "/public/img/clientes/inter.webp";
import logo3 from "/public/img/clientes/fiber.webp";
import logo4 from "/public/img/clientes/covirnet.webp";
import logo5 from "/public/img/clientes/academy.webp";

const clients = [
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
  { id: 4, logo: logo4 },
  { id: 5, logo: logo5 },
];

const Client = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
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
              src="/public/img/textos/nuestrosclientes.webp"
              alt="Especialidades"
              className="w-full h-auto max-w-[600px] mb-6"
            />
          </div>
          <motion.p className="text-lg text-gray-600 max-w-xl mx-auto">
            Descubre las razones que nos hacen destacar en el desarrollo de
            software y tecnología.
          </motion.p>
        </motion.div>

        {/* Contenedor del slider */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex animate-slider"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }} // Desplazarse a la izquierda
            transition={{
              duration: 20, // Tiempo total del desplazamiento
              ease: "linear",
              repeat: Infinity, // Repetir infinitamente
            }}
          >
            {/* Clonando la lista para un efecto infinito */}
            {clients.concat(clients).map((client) => (
              <div key={client.id} className="flex-shrink-0 w-1/5">
                {" "}
                {/* Ajuste de tamaño */}
                <img
                  src={client.logo}
                  alt={`Logo de Cliente ${client.id}`}
                  className="w-auto h-27 mx-auto" // Aumentar la altura a 24
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .animate-slider {
          display: flex;
          width: calc(100%); /* Duplicamos el ancho para el efecto de cinta */
        }

        .overflow-hidden {
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default Client;
