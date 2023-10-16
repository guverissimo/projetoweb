import {} from "react";
import "../css/Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
function Ropade() {
  return (
    <>
      <footer>
        <p className="p_rede">Redes Sociais</p>
        <div className="redes-sociais">
          <a
            className="icon"
            href="https://www.facebook.com/fiap?ref=embed_page"
            target="blank"
          >
            <AiFillFacebook></AiFillFacebook>
          </a>
          <a className="icon" href="https://www.instagram.com/">
            <AiFillInstagram></AiFillInstagram>
          </a>
          <a
            className="icon"
            href="#https://br.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
          <a className="icon" href="mailto:fiap@fiap.com">
            <AiFillMail></AiFillMail>
          </a>
        </div>

        <div className="get-email">
          <div>
            <h2>Fique por dentro de Promoções</h2>
            <p>Cadastre seu Email para receber cupons de desconto!</p>
          </div>
          <input type="email" placeholder="Digite seu melhor Email" />
        </div>
      </footer>
    </>
  );
}
export default Ropade;
