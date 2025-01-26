import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import urunler from "../data/urunler"; // Ürün verilerini içe aktarıyoruz

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const UrunlerCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const cld = new Cloudinary({
    cloud: { cloudName: "dkup33xp3" }, // Cloudinary cloudName'inizi ekleyin
  });

  return (
    <div id="products" className="w-full bg-gray-200 py-10 px-10">
      <h2 className="text-center text-3xl font-bold mb-6">Ürünlerimiz</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1.2}
        pagination={{ clickable: true, el: ".urunler-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-screen-xl mx-auto"
      >
        {urunler.map((product) => {
          const img = cld
            .image(product.image)
            .format("auto")
            .quality("auto")
            .resize(auto().gravity(autoGravity()).width(300).height(300));

          return (
            <SwiperSlide key={product.id}>
              <div
                className="p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(product)}
              >
                <AdvancedImage
                  cldImg={img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <h3 className="text-center text-lg font-semibold mt-4">
                  {product.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="urunler-pagination mt-6 flex gap-3 justify-center"></div>
      <div className="flex justify-center mt-4">
        <Link
          to="/urunler"
          className="bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 mt-4 inline-block text-center "
        >
          Tüm Ürünleri Gör
        </Link>
      </div>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-3xl">
            <button
              className="absolute top-2 right-2 text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
              {selectedImage.name}
            </h2>
            <AdvancedImage
              cldImg={cld.image(selectedImage.image).resize(auto().width(700))}
              alt={selectedImage.name}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-gray-700">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrunlerCarousel;
