import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="mb-5">
              <h3>EMPRESA:</h3> <br />
              <p>Argentina.</p> <br />
              <strong>Tel:</strong> +54 112 252 322 <br />
              <strong>Email:</strong> mejorpostornocountrys1@gmail.com <br />
            </div>
            <div className="mb-5">
              <h4>INFORMACIÓN:</h4> <br />
              <ul>
                <li>Sobre nosotros</li>
                <li>Nuestros servicios</li>
                <li>Políticas de privacidad</li>
              </ul>
            </div>
            <div className="mb-5">
              <h4>REDES SOCIALES:</h4> <br />
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
