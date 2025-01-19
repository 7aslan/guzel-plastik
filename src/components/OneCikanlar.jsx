import cevreDostu from "../assets/oneCikanlar/cevredostu.png";
import hizliTeslimat from "../assets/oneCikanlar/hizliteslimat.png"
import kalite from "../assets/oneCikanlar/kalite.png"

const OneCikanlar = () => {
  return (
    <section
      id="highlights"
      className=" bg-gray-200 py-16 text-center mx-auto"
    >
      <h3 className="text-3xl font-bold mb-10  ">Öne Çıkanlar</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
        <div className=" p-6 shadow-lg rounded-lg ">
          <img
            src={cevreDostu}
            alt="Çevre Dostu"
            className="w-15 h-15 m-auto object-cover mb-4 flex"
          />
          <h4 className="text-xl font-bold mb-2">Çevre Dostu</h4>
          <p>Geri dönüşüme uygun, sürdürülebilir üretim.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src={hizliTeslimat}
            alt="Hızlı Teslimat"
            className="w-15 h-15 m-auto object-cover mb-4 flex"
          />
          <h4 className="text-xl font-bold mb-2">Hızlı Teslimat</h4>
          <p>Siparişlerinizi zamanında teslim ediyoruz.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src={kalite}
            alt="Yüksek Kalite"
            className="w-15 h-15 m-auto object-cover mb-4 flex"
          />
          <h4 className="text-xl font-bold mb-2">Yüksek Kalite</h4>
          <p>Ürünlerimiz her zaman en iyi malzemelerle üretilir.</p>
        </div>
      </div>
    </section>
  );
};

export default OneCikanlar;
