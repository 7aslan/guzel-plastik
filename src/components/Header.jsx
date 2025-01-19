import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-red-600 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold ml-2">Güzel Plastik</h1>

        {/* Hamburger Menu Button */}
        <button
          className="text-white text-3xl md:hidden mr-2 "
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-red-600 md:static md:w-auto md:flex md:items-center md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center md:flex-row">
            {["Anasayfa", "Ürünler", "Makineler", "Hakkımızda", "Iletişim"].map(
              (item, index) => (
                <li key={index} className="mb-4 md:mb-0">
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                    className="text-xl cursor-pointer hover:underline mr-3"
                  >
                    {item}
                  </Link>
                  
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
