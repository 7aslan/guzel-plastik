const OneCikanlar = () => {
  return (
    <section id="highlights" className=" container mx-auto  py-16 text-center">
      <h3 className="text-3xl font-bold mb-10  ">Öne Çıkanlar</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Çevre Dostu"
            className="w-full h-40 object-cover mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Çevre Dostu</h4>
          <p>Geri dönüşüme uygun, sürdürülebilir üretim.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Hızlı Teslimat"
            className="w-full h-40 object-cover mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Hızlı Teslimat</h4>
          <p>Siparişlerinizi zamanında teslim ediyoruz.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Yüksek Kalite"
            className="w-full h-40 object-cover mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Yüksek Kalite</h4>
          <p>Ürünlerimiz her zaman en iyi malzemelerle üretilir.</p>
        </div>
      </div>
    </section>
  );
};

export default OneCikanlar;
