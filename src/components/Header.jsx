import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-red-600 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Güzel Plastik</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline"
              >Anasayfa</Link>
            </li>
            <li>
            <Link
                to="products"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline"
              >Ürünler</Link>
            </li>
            <li>
            <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline"
              >Hakkımızda</Link>
            </li>
            <li>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline"
              >İletişim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
