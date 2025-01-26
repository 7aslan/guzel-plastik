import { useState } from "react";
import { Link } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import Header from "../components/Header"; // Header import edildi
import urunler from "../data/urunler"; // Ürün verileri

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cld = new Cloudinary({
    cloud: { cloudName: "dkup33xp3" }, // Cloudinary ayarı
  });

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Ürünler Bölümü */}
      <div className="w-full bg-gray-100 py-16 px-10 mt-10">
        <h2 className="text-center text-2xl font-bold mb-8">Tüm Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {urunler.map((product) => {
            const img = cld
              .image(product.image)
              .format("auto")
              .quality("auto")
              .resize(auto().gravity(autoGravity()).width(2250).height(1250));

            return (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
              >
                <AdvancedImage
                  cldImg={img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-center text-lg font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-center text-gray-700 text-sm mb-4">
                    {product.description || "Bu ürün hakkında bilgi mevcut değil."}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                      İncele
                    </button>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <Link
                      to={`/teklif-al/${product.id}`}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                      Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
              {selectedProduct.name}
            </h2>
            <AdvancedImage
              cldImg={cld
                .image(selectedProduct.image)
                .resize(auto().width(700))}
              alt={selectedProduct.name}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-gray-700">
              {selectedProduct.description || "Detaylı bilgi mevcut değil."}
            </p>
            <div className="mt-4 text-center">
              <Link
                to={`/teklif-al/${selectedProduct.id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
