import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import PanZoom from "react-easy-panzoom";
import { Helmet } from "react-helmet";

const categories = [
  {
    name: "Sistema de Facturación",
    products: [
      {
        name: "FactuCash",
        images: [
          "/img/Productos/Facturacion/1.webp",
          "/img/Productos/Facturacion/2.webp",
          "/img/Productos/Facturacion/3.webp",
          "/img/Productos/Facturacion/4.webp",
          "/img/Productos/Facturacion/5.webp",
        ],
        description: "Sistema completo para la gestión de facturas.",
        details: "Incluye funcionalidades para reportes y análisis.",
        price: "$150",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
  {
    name: "Sistema de ISP",
    products: [
      {
        name: "ISPMAX",
        images: [
          "/img/Productos/Isp/1.webp",
          "/img/Productos/Isp/2.webp",
          "/img/Productos/Isp/3.webp",
          "/img/Productos/Isp/4.webp",
          "/img/Productos/Isp/5.webp",
        ],
        description:
          "Gestión integral para proveedores de servicios de internet.",
        details: "Con herramientas de soporte y gestión de clientes.",
        price: "$200",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
  {
    name: "Sistema de Bot",
    products: [
      {
        name: "WBOT",
        images: [
          "/img/Productos/wbot/1.webp",
          "/img/Productos/wbot/2.webp",
          "/img/Productos/wbot/3.webp",
          "/img/Productos/wbot/4.webp",
          "/img/Productos/wbot/5.webp",
        ],
        description: "Un bot de chat inteligente para atención al cliente.",
        details: "Facilita la interacción y mejora la atención al cliente.",
        price: "$100",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
  {
    name: "Sistema de Tickets",
    products: [
      {
        name: "FAST TICKET SYSTEM",
        images: [
          "/img/Productos/ticket/1.webp",
          "/img/Productos/ticket/2.webp",
          "/img/Productos/ticket/3.webp",
          "/img/Productos/ticket/4.webp",
          "/img/Productos/ticket/5.webp",
        ],
        description: "Sistema para la gestión de tickets de soporte.",
        details: "Organiza y resuelve tickets eficientemente.",
        price: "$120",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
  {
    name: "Servicios Web Personalizados",
    products: [
      {
        name: "WEB Personalizadas",
        images: [
          "/img/Productos/Webs/1.webp",
          "/img/Productos/Webs/2.webp",
          "/img/Productos/Webs/3.webp",
          "/img/Productos/Webs/4.webp",
          "/img/Productos/Webs/5.webp",
        ],
        description: "Desarrollo web a medida para tu negocio.",
        details: "Soluciones personalizadas según tus necesidades.",
        price: "$250",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
  {
    name: "Servicios HotSpot",
    products: [
      {
        name: "HotSpot Personalizados",
        images: [
          "/img/Productos/hotspot/1.webp",
          "/img/Productos/hotspot/2.webp",
          "/img/Productos/hotspot/3.webp",
          "/img/Productos/hotspot/4.webp",
          "/img/Productos/hotspot/5.webp",
        ],
        description: "Desarrollo de Hotspot personalizados.",
        details: "Soluciones según tus necesidades.",
        price: "$150",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
];

const Productos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedImage(null); // Resetear imagen seleccionada
  };

  const handleOpenImagePreview = (image) => {
    const isMobile = window.innerWidth <= 768; // Verificar si es móvil
    if (isMobile) {
      window.open(image, "_blank", "noopener,noreferrer");
    } else {
      setSelectedImage(image); // Si es escritorio, abrir la vista previa en el modal
    }
  };

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts = categories
    .filter(
      (category) =>
        activeCategory === "Todos" || category.name === activeCategory
    )
    .flatMap((category) => category.products);

  return (
    <div className="relative py-40 px-4 md:px-16">
      {/* SEO Dinámico para la Página de Productos */}
      <Helmet>
        <title>
          {activeCategory === "Todos"
            ? "Nuestros Productos - InigualitySoft"
            : `${activeCategory} - InigualitySoft`}
        </title>
        <meta
          name="description"
          content={
            activeCategory === "Todos"
              ? "Descubre nuestras soluciones digitales: sistemas de facturación, gestión ISP, bots, sistemas de tickets y servicios web personalizados."
              : `Explora nuestros productos en la categoría de ${activeCategory}.`
          }
        />
        <meta
          name="keywords"
          content={`productos, ${activeCategory}, software empresarial, desarrollo web, sistemas de gestión`}
        />
        <link
          rel="canonical"
          href={`https://www.inigualitysoft.com/productos/${activeCategory}`}
        />
      </Helmet>

      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="/img/textos/nuestrosproductos.webp"
          alt="Galería de Proyectos"
          className="w-full h-auto max-w-[600px]"
          loading="lazy" // Carga diferida de la imagen
        />
      </motion.div>
      <motion.p
        className="text-center text-lg text-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Descubre nuestras soluciones digitales, diseñadas para mejorar tu
        negocio con herramientas innovadoras y eficientes.
      </motion.p>
      {/* Barra de filtrado */}
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto mb-8">
        {[
          "Todos",
          "Sistema de Facturación",
          "Sistema de ISP",
          "Sistema de Bot",
          "Sistema de Tickets",
          "Servicios Web Personalizados",
          "Servicios HotSpot",
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 whitespace-nowrap rounded transition duration-200 ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={idx}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleOpenModal(product)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-50 object-cover rounded-lg"
              loading="lazy" // Carga diferida de la imagen
            />
            <h3 className="text-center text-lg font-semibold">
              {product.name}
            </h3>
          </motion.div>
        ))}
      </div>
      {/* Modal para producto seleccionado */}
      {isModalOpen && selectedProduct && (
        <>
          <Helmet>
            <title>{`${selectedProduct.name} - InigualitySoft`}</title>
            <meta
              name="description"
              content={`${selectedProduct.name}: ${selectedProduct.description}. ${selectedProduct.details}`}
            />
            <meta
              name="keywords"
              content={`${selectedProduct.name}, software, soluciones digitales`}
            />
            <meta property="og:image" content={selectedProduct.images[0]} />
            <meta property="og:title" content={selectedProduct.name} />
            <meta
              property="og:description"
              content={selectedProduct.description}
            />
          </Helmet>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full shadow-lg overflow-hidden">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-600 mb-2">
                {selectedProduct.description}
              </p>
              <p className="text-gray-500 mb-4">{selectedProduct.details}</p>
              <p className="font-bold mb-2">{selectedProduct.price}</p>
              <p className="text-gray-500 mb-4">
                Contacto: {selectedProduct.contact}
              </p>
              <div className="flex items-center mb-4">
                <a
                  href={`https://wa.me/+593991031784`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-200"
                >
                  <FaWhatsapp className="mr-2" /> Contáctanos por WhatsApp
                </a>
              </div>
              <div className="overflow-auto max-h-60">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProduct.images.map((img, imgIdx) => (
                    <motion.img
                      key={imgIdx}
                      src={img}
                      alt={`Imagen ${selectedProduct.name} ${imgIdx + 1}`}
                      className="w-full h-32 object-cover rounded shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                      onClick={() => handleOpenImagePreview(img)} // Abre la vista previa al hacer clic
                      loading="lazy" // Carga diferida de la imagen
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
      {/* Vista previa de imagen en modo escritorio */}
      {selectedImage && window.innerWidth > 768 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-transparent p-6 max-w-full w-full shadow-lg overflow-hidden">
            <PanZoom zoomSpeed={0.3} autoCenter={true} boundaryRatio={0.8}>
              <img
                src={selectedImage}
                alt="Vista previa"
                className="w-full h-auto rounded mb-4"
                style={{ maxHeight: "90vh", objectFit: "contain" }}
                loading="lazy" // Carga diferida de la imagen
              />
            </PanZoom>
          </div>
          <button
            onClick={() => setSelectedImage(null)} // Cierra solo la vista previa
            className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Cerrar Vista Previa
          </button>
        </div>
      )}
    </div>
  );
};

export default Productos;
