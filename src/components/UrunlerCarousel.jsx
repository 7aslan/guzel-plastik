import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import urun1 from "../assets/urunler/urun1.jpg"
import urun5 from "../assets/urunler/urun5.jpg"
import urun6 from "../assets/urunler/urun6.jpg"
import urun7 from "../assets/urunler/urun7.jpg"
import urun9 from "../assets/urunler/urun9.jpg"
import kelepceson from "../assets/urunler/kelepceson.jpg"


const UrunlerCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Ürün 1",
      image: kelepceson,
      description: "Ürün 1 açıklaması"
    },
    {
      id: 2,
      name: "Ürün 2",
      image: urun1,
      description: "Ürün 1 açıklaması"
    },
    {
      id: 3,
      name: "Ürün 3",
      image: urun5,
      description: "Ürün 2 açıklaması"
    },
    {
      id: 4,
      name: "Ürün 4",
      image: urun6,
      description: "Ürün 3 açıklaması"
    },
    {
      id: 5,
      name: "Ürün 5",
      image: urun7,
      description: "Ürün 4 açıklaması"
    },
    {
      id: 6,
      name: "Ürün 6",
      image: urun9,
      description: "Ürün 5 açıklaması"
    },
  ];

  return (
    <div id="products" className="w-full bg-gray-200 py-10 px-10 ">
      <h2 className="text-center text-2xl font-bold mb-6">Ürünlerimiz</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".urunler-pagination" }} // Özel pagination
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
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg" // Sabit yükseklik
              />
              <h3 className="text-center text-lg font-semibold mt-4">
                {product.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="urunler-pagination mt-6 flex gap-3 justify-center"></div>

      {/* Pop-up Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-gray-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrunlerCarousel;
