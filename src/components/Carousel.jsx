import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  const products = [
    {
      id: 1,
      name: "Ürün 1",
      image: "https://via.placeholder.com/300x200?text=Ürün+1",
    },
    {
      id: 2,
      name: "Ürün 2",
      image: "https://via.placeholder.com/300x200?text=Ürün+2",
    },
    {
      id: 3,
      name: "Ürün 3",
      image: "https://via.placeholder.com/300x200?text=Ürün+3",
    },
    {
      id: 4,
      name: "Ürün 4",
      image: "https://via.placeholder.com/300x200?text=Ürün+4",
    },
  ];

  return (
    <div id="products" className="w-full bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold  mb-6">Ürünlerimiz</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-center text-lg font-semibold mt-4">
                {product.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
