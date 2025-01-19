const AboutUs = () => {
  return (
    <div className="py-10 bg-gray-200 text-center">
      {/* Başlık */}
      <h2 className="text-2xl font-bold text-black mb-4 md:text-3xl lg:text-4xl">
        Hakkımızda
      </h2>
      
      {/* Açıklama Metni */}
      <p className="text-gray-700 max-w-3xl mx-auto px-4 text-sm sm:text-base md:text-lg lg:text-xl">
        Güzel Plastik, sektörde 20 yılı aşkın tecrübesiyle yüksek kaliteli plastik ürünler
        üretmektedir. Çevre dostu üretim süreçleriyle, müşteri memnuniyetini ön planda
        tutuyoruz.
      </p>
      
      {/* Görsel */}
      <img
        src="https://via.placeholder.com/600x400"
        alt="Hakkımızda"
        className="mt-6 mx-auto rounded-lg shadow-lg w-1 sm:w-3/4 md:w-2/3 lg:w-1/2"
      />
    </div>
  );
};

export default AboutUs;
