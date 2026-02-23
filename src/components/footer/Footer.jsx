import S from "./footer.module.scss";
import Logo from "../../assets/nav/coracao.png";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={S.footer} id="footer">
      
      <div className={`${S.container} ${S.footer__container}`}>

        <div className={`${S.footer__col} ${S.footer__brand}`}>
          <div className={S.logoContainer}>
            <img src={Logo} alt="Logo" />
            <h2 className={S.logoFooter}>Médicos & Dentistas</h2>
          </div>
          <p className={S.brandText}>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={S.footer__col}>
          <h4>Contato</h4>
          <ul className={S.footer__links}>
            <li>
              <Mail size={18} />
              <span>medicos_e_dentistas@gmail.com</span>
            </li>
            <li>
              <Phone size={18} />
              <span>(11) 99812-3456</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>São Paulo, Brasil</span>
            </li>
          </ul>
        </div>  

        <div className={`${S.footer__col} ${S.socialCol}`}>
          <h4>Redes Sociais</h4>         
          
          <ul className={S.socialList}>
            <li><span>Facebook</span></li>
            <li><span>Instagram</span></li>
            <li><span>LinkedIn</span></li>
          </ul>
        </div>
      </div>

      <div className={S.footer__bottom}>
        <div className={`${S.container} ${S.footer__copyright}`}>
          <p>
            &copy; <span>2025 Médicos e Dentistas</span> pela Comunidade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}