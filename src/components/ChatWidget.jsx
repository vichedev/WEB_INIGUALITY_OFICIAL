import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Icono de WhatsApp
import { IoClose } from "react-icons/io5"; // Icono de cerrar más elegante
import inigualityLogo from "/img/icon_whatsapp/icon.webp"; // Asegúrate de tener la imagen de contacto en la carpeta public/img

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const phoneNumber = "+593991031784"; // Reemplaza con el número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Verifica que el mensaje no esté vacío antes de abrir el enlace
    if (message.trim()) {
      window.open(url, "_blank");
      setMessage(""); // Limpia el mensaje después de enviarlo
    } else {
      alert("Por favor, escribe un mensaje antes de enviar."); // Alerta si el mensaje está vacío
    }
  };

  const handleSuggestedResponse = (suggestion) => {
    setMessage(suggestion); // Coloca la respuesta sugerida en el campo de entrada
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleChat} style={styles.chatButton}>
        <FaWhatsapp style={styles.icon} />
      </button>

      {isChatOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <img
              src={inigualityLogo}
              alt="InigualitySoft"
              style={styles.contactImage}
            />
            <span style={styles.contactName}>InigualitySoft</span>
            <button onClick={toggleChat} style={styles.closeButton}>
              <IoClose style={styles.closeIcon} />
            </button>
          </div>
          <div style={styles.body}>
            <p>¡Hola! ¿Cómo podemos ayudarte?</p>
            <div style={styles.suggestions}>
              {/* Sugerencias de respuestas */}
              <button
                onClick={() =>
                  handleSuggestedResponse("Quiero hablar con un asesor")
                }
                style={styles.suggestionButton}
              >
                Quiero hablar con un asesor
              </button>
              <button
                onClick={() =>
                  handleSuggestedResponse("Quiero programar una reunión")
                }
                style={styles.suggestionButton}
              >
                Quiero programar una reunión
              </button>
              <button
                onClick={() =>
                  handleSuggestedResponse(
                    "Quiero más información sobre InigualitySoft"
                  )
                }
                style={styles.suggestionButton}
              >
                Quiero más información sobre InigualitySoft
              </button>
            </div>
          </div>
          <div style={styles.footer}>
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Escribe tu mensaje..."
              style={styles.input}
            />
            <button style={styles.sendButton} onClick={sendMessage}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 999, // Mayor que el botón de subir
  },
  chatButton: {
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  icon: {
    fontSize: "30px",
  },
  chatWindow: {
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000, // Asegúrate de que esté encima del botón de subir
  },
  header: {
    backgroundColor: "#075E54",
    padding: "10px",
    borderRadius: "10px 10px 0 0",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#fff",
  },
  closeIcon: {
    fontSize: "20px",
  },
  contactImage: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  contactName: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    flexGrow: 1,
  },
  body: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    backgroundColor: "#ECE5DD",
  },
  footer: {
    padding: "10px",
    borderTop: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    marginRight: "10px",
    outline: "none",
  },
  sendButton: {
    backgroundColor: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  suggestions: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    background: "rgba(255, 255, 255, 0.8)", // Fondo difuminado
    borderRadius: "5px",
    padding: "10px",
  },
  suggestionButton: {
    backgroundColor: "#e0e0e0",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    padding: "8px",
    margin: "5px 0",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    flex: 1,
  },
};

export default ChatWidget;
