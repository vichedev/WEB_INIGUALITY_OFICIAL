import { RiMenuUnfold4Fill, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom"; // Usamos Link para navegación interna

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  return (
    <header className="fixed top-0 left-0 w-full p-4 h-[10vh] bg-white bg-opacity-90 shadow-lg z-50">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="w-1/3 text-center xl:w-1/6">
          <Link to="/">
            <img
              src="/iniguality.svg"
              alt="logo de iniguality"
              className="h-12 w-full max-w-[150px] xl:max-w-none"
            />
          </Link>
        </div>

        {/* Navegación */}
        <nav
          className={`fixed z-40  w-4/5 h-full right-0 top-0 xl:static xl:w-auto xl:flex-1 flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-5
          transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } xl:translate-x-0 pt-20 xl:pt-0`}
        >
          <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-6">
            <Link
              to="/nosotros"
              className="text-primary py-3 px-6 rounded-full hover:after:bg-blue-500 relative transition-all duration-300 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-transparent hover:after:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/productos"
              className="text-primary py-3 px-6 rounded-full hover:after:bg-blue-500 relative transition-all duration-300 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-transparent hover:after:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/contactos"
              className="text-primary py-3 px-6 rounded-full hover:after:bg-blue-500 relative transition-all duration-300 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-transparent hover:after:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Contactos
            </Link>
          </div>
        </nav>

        {/* Botón de menú para móviles */}
        <button
          className="ml-auto xl:hidden z-50 p-2 rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <RiCloseLine size={24} />
          ) : (
            <RiMenuUnfold4Fill size={24} />
          )}
        </button>

        {/* Fondo oscuro para móviles */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>

      {/* Logo y navegación en modo móvil */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-40 bg-white pt-20">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/iniguality.svg"
              alt="logo de iniguality"
              className="h-24 mb-4"
            />
          </Link>
          <div className="flex flex-col items-center justify-center gap-4 w-full text-center">
            <Link
              to="/nosotros"
              className="text-primary py-2 px-4 rounded-full hover:after:bg-blue-500 relative transition-all duration-300 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-transparent hover:after:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/productos"
              className="text-primary py-2 px-4 rounded-full hover:after:bg-blue-500 relative transition-all duration-300 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-transparent hover:after:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/contactos"
              className="text-primary py-2 px-4 rounded-full hover:after:bg-blue-500 relative transition-all duration-300 text-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-transparent hover:after:bg-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              Contactos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
