import OneCikanlar from "../components/OneCikanlar";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import UrunlerCarousel from "../components/UrunlerCarousel";
import MakinelerCarousel from "../components/MakinelerCarousel";
import ContactUs from "../components/ContactUs";
import MainPage from "../components/mainPage";

const Home = () => {
  return (
    <div id="home" className="bg-white text-gray-800">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section
        id="anasayfa"
        className="bg-blue-500 text-white py-20 pb-5 text-center flex flex-col items-center"
      >
        <MainPage />
      </section>

      {/* Öne Çıkanlar */}
      <OneCikanlar />
      {/* Urunler Carousel */}
      <section id="ürünler">
        <UrunlerCarousel />
      </section>

      {/*Makinelerimiz*/}
      <section id="makineler">
        <MakinelerCarousel />
      </section>

      {/* Hakkımızda */}
      <section id="hakkımızda">
        <AboutUs />
      </section>

      {/*Bizimle iletişime geçin */}
      <section id="iletişim">
        <ContactUs />
      </section>

      {/* Footer */}
      <footer className="bg-blue-400 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Plastik Şirketi. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
