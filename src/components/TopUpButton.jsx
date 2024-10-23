import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopUpButton = ({ isChatOpen }) => {
  const [showButton, setShowButton] = useState(false);

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 30;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

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
        <button
          onClick={smoothScrollToTop}
          style={{
            ...styles.button,
            bottom: isChatOpen ? "90px" : "20px", // Ajustar posición si el chat está abierto
          }}
        >
          <FaArrowUp style={styles.icon} />
        </button>
      )}
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    right: "20px", // Mantenerlo justo a la izquierda del botón de WhatsApp
    width: "60px",
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
