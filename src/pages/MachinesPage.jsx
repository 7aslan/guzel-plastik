import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import Header from "../components/Header";
import makineler from "../data/makineler";

const MachinesPage = () => {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const cld = new Cloudinary({ cloud: { cloudName: "dkup33xp3" } });

  const handleTeklifAl = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(
      window.navigator.userAgent
    );
    if (isMobile) window.location.href = "tel:+905352440874";
    else window.location.href = "/#iletişim";
  };

  return (
    <div>
      <Header />
      <div className="w-full bg-gray-100 py-16 px-10 mt-10">
        <h2 className="text-center text-4xl font-bold mb-8">Tüm Makineler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {makineler.map((machine) => {
            const img = cld
              .image(machine.image)
              .format("auto")
              .quality("auto")
              .resize(auto().gravity(autoGravity()).width(1600).height(900));

            return (
              <div
                key={machine.id}
                className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
              >
                <AdvancedImage
                  cldImg={img}
                  alt={machine.name}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-center text-lg font-semibold mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-center text-gray-700 text-sm mb-4">
                    {machine.description ||
                      "Bu makine hakkında bilgi mevcut değil."}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => setSelectedMachine(machine)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                      İncele
                    </button>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <button
                      onClick={handleTeklifAl}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                      Teklif Al
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedMachine && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedMachine(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
              {selectedMachine.name}
            </h2>
            <AdvancedImage
              cldImg={cld
                .image(selectedMachine.image)
                .resize(auto().width(700))}
              alt={selectedMachine.name}
              className="max-w-full max-h-[60vh] object-contain mx-auto block rounded-lg"
            />

            <p className="mt-4 text-center text-gray-700">
              {selectedMachine.description || "Detaylı bilgi mevcut değil."}
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={handleTeklifAl}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MachinesPage;
