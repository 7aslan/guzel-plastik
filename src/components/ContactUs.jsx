import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">İletişim</h2>
        <p className="mb-4">
          Plastik sektöründeki sorularınız veya iş birliği teklifiniz için bize ulaşabilirsiniz.
        </p>
        <div className="space-y-2">
          <p>📍 Adres: Küsget Sanayi Şehitkamil/Gaziantep</p>
          <p>📞 Telefon: +90 212 555 44 33</p>
          <p>✉️ E-posta: info@guzelplastik.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
