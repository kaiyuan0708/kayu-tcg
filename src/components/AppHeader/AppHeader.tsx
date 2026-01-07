import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";

export function AppHeader() {
  const { i18n } = useTranslation();

  return (
    <header>
      <nav className="nav-left">
        <NavLink to="/" className="logo-link">
          <img
            src="/KYTCG.png"
            alt="KY Logo"
            className="logo"
          />
          <span>Kayu TCG</span>
        </NavLink>
      </nav>

      {/* <nav className="nav-right">
        <NavLink to="/contactus">Contact Us</NavLink>
      </nav> */}
      <div className="nav-right">
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <span style={{ margin: "0 6px" }}>|</span>
        <button onClick={() => i18n.changeLanguage("zh")}>中文</button>
      </div>
    </header>
  );
}
