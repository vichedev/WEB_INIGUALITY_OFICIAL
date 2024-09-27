import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // Importar Framer Motion
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importar useLocation

// Componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import King from "./components/King";
import Gallery from "./components/Galery";
import Client from "./components/client";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Contact from "./components/Contact";

// Componente ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

//||||||||||||||||||||||||||||||||||||||||||||||

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Componente ScrollToTop para desplazarse a la parte superior */}
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <Especialidades />
                <King />
                <Gallery />
                <Client />
              </motion.div>
            }
          />
          <Route
            path="/nosotros"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Nosotros />
              </motion.div>
            }
          />
          <Route
            path="/productos"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Productos />
              </motion.div>
            }
          />
          <Route
            path="/contactos"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
