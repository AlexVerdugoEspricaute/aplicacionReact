import React from "react";
import LogoEmail from "../../images/logos/LogoEmail.jpg";
import LogoFacebook from "../../images/logos/LogoFacebook.png";
import LogoInstagram from "../../images/logos/LogoInstagram.png";

function Footer() {
  return (
    <footer className="fixed-bot tom">
      <div className="card text-center">
        <div className="card-body">
          <a href="#">
            <h5 className="card-title">Verdugo import</h5>
          </a>
          <a href="https://www.facebook.com/">
            <img
              src={LogoFacebook}
              aria-current="page"
              alt="Facebook"
              width="35"
              height="35"
            />
          </a>
          <a href="mailto:elcorreoquequieres@correo.com">
            <img
              src={LogoEmail}
              aria-current="page"
              alt="E-Mail"
              width="35"
              height="35"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={LogoInstagram}
              aria-current="page"
              alt="Instagram"
              width="35"
              height="35"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
