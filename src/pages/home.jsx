import React from "react";
import Carousel from "../components/Carousel";
import OneCikanlar from "../components/OneCikanlar";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";

const Home = () => {
  return (
    <div id="home" className="bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-red-500 text-white py-20 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-4">
          Yüksek Kalite, Yenilikçi Çözümler
        </h2>
        <p className="max-w-md">
          Plastik endüstrisinde yılların tecrübesiyle kaliteli ve çevre dostu
          çözümler sunuyoruz.
        </p>
        <button className="mt-6 bg-white text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Daha Fazla Bilgi
        </button>
      </section>

      {/* Öne Çıkanlar */}
      <OneCikanlar />
      {/* Carousel */}
      <Carousel />
      {/* Hakkımızda */}
      <AboutUs />

      {/* Footer */}
      <footer className="bg-red-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Plastik Şirketi. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
