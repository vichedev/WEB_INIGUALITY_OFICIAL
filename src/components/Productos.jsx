import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import PanZoom from "react-easy-panzoom";
import { Helmet } from "react-helmet";
import SectionTitle from "./SectionTitle";

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
        price: "$100",
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
        price: "$50",
        contact: "info@inigualitysoft.com",
      },
    ],
  },
  {
    name: "Servicios de Diseño Grafico",
    products: [
      {
        name: "Diseño Grafico",
        images: [
          "/img/Productos/Diseño/1.webp",
          "/img/Productos/Diseño/2.webp",
          "/img/Productos/Diseño/3.webp",
          "/img/Productos/Diseño/4.webp",
          "/img/Productos/Diseño/5.webp",
        ],
        description: "Rebranding de Marca.",
        details: "Rediseñamos tu marca, tu logo al siguiente nivel!!.",
        price: "$250",
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

  const ispmax = categories
    .flatMap((category) => category.products)
    .find((product) => product.name === "ISPMAX");

  const filteredProducts = categories
    .filter(
      (category) =>
        activeCategory === "Todos" || category.name === activeCategory
    )
    .flatMap((category) => category.products);

  return (
    <div className="relative max-w-6xl px-4 py-32 mx-auto md:px-8">
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
              ? "Descubre nuestras soluciones digitales: sistemas de facturación, gestión ISP y servicios web personalizados."
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

      <SectionTitle
        eyebrow="Catálogo"
        title="Nuestros"
        highlight="productos"
        subtitle="Soluciones digitales diseñadas para mejorar tu negocio con herramientas innovadoras y eficientes."
      />

      {/* Producto estrella: ISPMAX */}
      {ispmax && (
        <motion.div
          className="relative mb-12 overflow-hidden text-white shadow-2xl rounded-2xl bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute rounded-full pointer-events-none -top-24 -right-24 w-80 h-80 bg-cyan-400/20 blur-3xl" />
          <div className="relative grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full text-slate-900 bg-yellow-300">
                <FaStar /> Producto estrella
              </span>
              <h2 className="mb-3 text-4xl font-extrabold md:text-5xl">
                ISPMAX
              </h2>
              <p className="mb-2 text-lg text-sky-100">{ispmax.description}</p>
              <p className="mb-6 text-sky-200">{ispmax.details}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ispmax.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition rounded-full text-slate-900 bg-cyan-300 hover:bg-cyan-200 hover:scale-105"
                >
                  Visitar ispmax.ec <FaExternalLinkAlt size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => handleOpenModal(ispmax)}
                  className="px-6 py-3 font-semibold transition border rounded-full border-white/40 bg-white/10 hover:bg-white/20"
                >
                  Ver capturas
                </button>
              </div>
            </div>
            <img
              src={ispmax.images[0]}
              alt="Captura del sistema ISPMAX"
              className="w-full h-auto rounded-xl shadow-xl cursor-pointer ring-1 ring-white/20"
              loading="lazy"
              onClick={() => handleOpenModal(ispmax)}
            />
          </div>
        </motion.div>
      )}

      {/* Barra de filtrado */}
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto mb-8">
        {[
          "Todos",
          "Sistema de Facturación",
          "Sistema de ISP",
          "Servicios Web Personalizados",
          "Servicios HotSpot",
          "Servicios de Diseño Grafico",
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`px-5 py-2 text-sm font-semibold whitespace-nowrap rounded-full transition duration-200 ${
              activeCategory === category
                ? "bg-gradient-to-r from-primary to-relevo text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-sky-100 hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden transition-shadow duration-300 bg-white border shadow-lg cursor-pointer group rounded-3xl border-slate-100 hover:shadow-2xl hover:shadow-sky-500/10"
            onClick={() => handleOpenModal(product)}
            whileHover={{ y: -8 }}
          >
            <div className="overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full transition-transform duration-500 h-52 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{product.description}</p>
              <span className="inline-block mt-3 text-sm font-bold text-primary">
                Ver detalle →
              </span>
            </div>
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
                  href={`https://wa.link/odbwmc`}
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
