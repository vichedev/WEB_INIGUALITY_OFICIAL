import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importar el icono de subida desde react-icons

const TopUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Función para desplazarse suavemente hacia arriba
  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 30; // Cambia este valor para ajustar la velocidad
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Tiempo del intervalo para un movimiento suave
  };

  // Mostrar el botón cuando el usuario hace scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button onClick={smoothScrollToTop} style={styles.button}>
          <FaArrowUp style={styles.icon} /> {/* Icono de subida */}
        </button>
      )}
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px", // Mantenerlo justo a la izquierda del botón de WhatsApp
    right: "90px", // Ajustar para que esté a la izquierda del botón de WhatsApp
    width: "60px", // Asegurarse de que tenga el mismo tamaño que el botón de WhatsApp
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #a0c4ff, #3a86ff)",
    color: "#fff",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    transition: "opacity 0.3s ease-in-out",
  },
  icon: {
    fontSize: "20px",
  },
};

export default TopUpButton;
