import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import urunler from "../data/urunler"; // Ürün verilerini içe aktarıyoruz

import "swiper/css";
import "swiper/css/pagination";

const UrunlerCarousel = () => {
  const cld = new Cloudinary({
    cloud: { cloudName: "dkup33xp3" }, // Cloudinary cloudName'inizi ekleyin
  });

  return (
    <div id="products" className="w-full bg-gray-200 py-10 px-10">
      <h2 className="text-center text-2xl font-bold mb-6">Ürünlerimiz</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".urunler-pagination" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {urunler.map((product) => {
          const img = cld
            .image(product.image)
            .format("auto")
            .quality("auto")
            .resize(auto().gravity(autoGravity()).width(500).height(500));

          return (
            <SwiperSlide key={product.id}>
              <div className="p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform">
                <AdvancedImage
                  cldImg={img}
                  className="w-full h-64 object-cover rounded-t-lg"
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
    </div>
  );
};

export default UrunlerCarousel;
