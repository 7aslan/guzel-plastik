const ContactUs = () => {
  return (
    <section id="contact" className="bg-blue-500 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">İletişim</h2>
        <p className="mb-4">
          Plastik sektöründeki sorularınız veya iş birliği teklifiniz için bize
          ulaşabilirsiniz.
        </p>
        <div className="space-y-2">
          <p>📍 Adres: Küsget Sanayi Şehitkamil/Gaziantep</p>
          <p>📞 Telefon: +90 212 555 44 33</p>
          <p>✉️ E-posta: info@guzelplastik.com</p>
        </div>

        <div className="flex items-center justify-center mt-4">
          {/* Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101866.49513165563!2d37.29096554335936!3d37.07349479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5c863e45ba7%3A0x20ad8cd2ed0a284c!2sG%C3%BCzel%20Plastik%20Kalip%20Sanayi!5e0!3m2!1str!2str!4v1737301503572!5m2!1str!2str"
            width="80%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
