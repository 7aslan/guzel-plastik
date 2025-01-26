import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMenu();
  };

  const handleTeklifAlClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(
      window.navigator.userAgent
    );
    if (isMobile) {
      // Mobil cihazlarda telefon uygulamasını aç
      window.location.href = "tel:+905352440874";
    } else {
      // Masaüstü cihazlarda iletişim kısmına yönlendir
      navigateToSection("iletişim");
    }
  };

  return (
    <header className="bg-blue-400 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" width={55} className="ml-5 rounded-xl" />
          <h1 className="text-3xl font-bold ml-2">Güzel Plastik</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-white text-3xl md:hidden mr-2"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-20 left-0 w-full bg-blue-400 md:static md:w-auto md:flex md:items-center md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center md:flex-row">
            <li className="mb-4 md:mb-0">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-xl cursor-pointer hover:underline mr-3"
              >
                Anasayfa
              </Link>
            </li>
            <li className="mb-4 md:mb-0">
              <Link
                to="/urunler"
                onClick={closeMenu}
                className="text-xl cursor-pointer hover:underline mr-3"
              >
                Ürünler
              </Link>
            </li>
            <li className="mb-4 md:mb-0">
              <button
                onClick={() => navigateToSection("makineler")}
                className="text-xl cursor-pointer hover:underline mr-3"
              >
                Makineler
              </button>
            </li>
            <li className="mb-4 md:mb-0">
              <button
                onClick={() => navigateToSection("hakkımızda")}
                className="text-xl cursor-pointer hover:underline mr-3"
              >
                Hakkımızda
              </button>
            </li>
            <li className="mb-4 md:mb-0">
              <button
                onClick={() => navigateToSection("iletişim")}
                className="text-xl cursor-pointer hover:underline mr-3"
              >
                İletişim
              </button>
            </li>
            <li className="mb-4 md:mb-0">
              <button
                onClick={handleTeklifAlClick}
                className="text-xl bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Teklif Al
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
