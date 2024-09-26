// Importaciones
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import King from "./components/King";
import Gallery from "./components/Galery";
import Client from "./components/client";
import Footer from "./components/Footer";

// NAVEGACION
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import Contact from "./components/Contact";

//||||||||||||||||||||||||||||||||||||||||||||||

const BlankPage = () => <div style={{ minHeight: "90vh" }}></div>;

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: "100vh" }}>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Especialidades />
                <King />
                <Gallery />
                <Client />
              </>
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />{" "}
          <Route path="/productos" element={<Productos />} />
          <Route path="/contactos" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
