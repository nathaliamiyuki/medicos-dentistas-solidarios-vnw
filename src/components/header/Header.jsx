import { Link } from "react-router-dom";
import Logo from "../../assets/nav/coracao.png";
import S from "./header.module.scss";

export default function Header() {
  return (
    <header id="header" className={S.header}>
      <Link to="/" title="Voltar para a Home">
        <div className={S.boxLogo}>
          <img src={Logo} alt="Logo — coração verde" />
          <h2>Medicos & Dentistas</h2>
        </div>
      </Link>

      <nav className={S.nav}>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </nav>
    </header>
  );
}
