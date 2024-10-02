import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Icono de WhatsApp
import { IoClose } from 'react-icons/io5'; // Icono de cerrar más elegante

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const phoneNumber = "+593991031784"; // Reemplaza con el número de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage('');
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleChat} style={styles.chatButton}>
        <FaWhatsapp style={styles.icon} />
      </button>

      {isChatOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <span>Chat con InigualitySoft</span>
            <button onClick={toggleChat} style={styles.closeButton}>
              <IoClose style={styles.closeIcon} />
            </button>
          </div>
          <div style={styles.body}>
            <p>¡Hola! ¿Cómo podemos ayudarte?</p>
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
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 999,
  },
  chatButton: {
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '50%',
    width: '60px', // Asegúrate de que este tamaño sea igual al del botón de subir
    height: '60px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '30px',
  },
  chatWindow: {
    width: '300px',
    height: '400px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#075E54',
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#fff',
  },
  closeIcon: {
    fontSize: '20px',
  },
  body: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#ECE5DD',
  },
  footer: {
    padding: '10px',
    borderTop: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '8px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    marginRight: '10px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#25D366',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
  },
};

export default ChatWidget;
