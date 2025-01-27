import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import oneCikanlar from "../data/oneCikanlar"; // Öne çıkanlar verisini içe aktarıyoruz.

const OneCikanlar = () => {
  const cld = new Cloudinary({
    cloud: { cloudName: "dkup33xp3" }, 
  });

  return (
    <section id="highlights" className="bg-gray-200 py-16 text-center mx-auto">
      <h3 className="text-3xl font-bold mb-10">Öne Çıkanlar</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-64 ">
        {oneCikanlar.map((item) => {
          const img = cld
            .image(item.image)
            .format("auto")
            .quality("auto")
            .resize(auto().width(200).height(200));

          return (
            <div key={item.id} className="p-6 shadow-lg rounded-lg">
              <AdvancedImage
                cldImg={img}
                alt={item.title}
                className="w-15 h-15 m-auto object-cover mb-4 flex"
              />
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OneCikanlar;
