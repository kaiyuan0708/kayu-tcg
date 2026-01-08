import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";

export function AppHeader() {
  const { i18n } = useTranslation();
  const isEN = i18n.language === "en";
  const isZH = i18n.language === "zh";

  return (
    <header>
      <nav className="nav-left">
        <NavLink to="/" className="logo-link">
          <img src="/KYTCG.png" alt="KY Logo" className="logo" />
          <span>Kayu TCG</span>
        </NavLink>
      </nav>

      <div className="nav-right">
        <button
          style={{ fontWeight: isEN ? 600 : 400 }}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
        <span>|</span>
        <button
          style={{ fontWeight: isZH ? 600 : 400 }}
          onClick={() => i18n.changeLanguage("zh")}
        >
          中文
        </button>
      </div>
    </header>
  );
}
