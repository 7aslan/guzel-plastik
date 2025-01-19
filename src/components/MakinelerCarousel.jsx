import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import cihaz1 from "../assets/cihazlar/cihaz1.jpg";
import cihaz3 from "../assets/cihazlar/cihaz3.jpg";
import cihaz4 from "../assets/cihazlar/cihaz4.jpg";
import cihaz5 from "../assets/cihazlar/cihaz5.jpg";

const MakinelerCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: 1,
      name: "Plastik Enjeksiyon Makinesi",
      image: cihaz1,
      description: "Yüksek kaliteli plastik ürünler üretiminde kullanılan enjeksiyon makinesi."
    },
    {
      id: 2,
      name: "CNC Makinesi",
      image: cihaz3,
      description: "Özel tasarımlar ve yüksek hassasiyetli işleme için kullanılan CNC makinesi."
    },
    {
      id: 3,
      name: "CNC Makinesi",
      image: cihaz4,
      description: "Karmaşık iş parçalarının üretimi için güçlü CNC makineleri."
    },
    {
      id: 4,
      name: "Plastik Enjeksiyon Makinesi",
      image: cihaz5,
      description: "Yüksek kaliteli plastik ürünler üretiminde kullanılan enjeksiyon makinesi."
    },
  ];

  return (
    <div id="products" className="w-full bg-gray-200 py-10 px-10">
      <h2 className="text-center text-2xl font-bold mb-6">Makinelerimiz</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".makineler-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-t-lg"
              />
              <h3 className="text-center text-lg font-semibold mt-4">
                {product.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="makineler-pagination mt-6 flex justify-center gap-4"></div>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">{selectedImage.name}</h2>
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-gray-700">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakinelerCarousel;
