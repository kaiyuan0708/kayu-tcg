import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiXiaohongshu } from "react-icons/si";
import "./AppFooter.css";

export function AppFooter() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I found your website and would like to know more 😊"
  );

  return (
    <footer className="app-footer">
      <h2 className="footer-title">Contact Us</h2>

      <ul className="footer-list">
        <li>
          <FaInstagram className="footer-icon instagram" />
          <a
            href="https://instagram.com/kaiiyuan98"
            target="_blank"
            rel="noopener noreferrer"
          >
            kaiiyuan98
          </a>
        </li>

        <li>
          <SiXiaohongshu className="footer-icon rednote" />
          <a
            href="https://www.xiaohongshu.com/user/profile/4220452954"
            target="_blank"
            rel="noopener noreferrer"
          >
            只是一块木头
          </a>
        </li>

        <li>
          <FaWhatsapp className="footer-icon whatsapp" />
          <a
            href={`https://wa.me/60188741578?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            +60 18-874 1578
          </a>
        </li>

        <li>
          <FaEnvelope className="footer-icon email" />
          <a href="mailto:kaiyuan6953@gmail.com">
            kaiyuan6953@gmail.com
          </a>
        </li>
      </ul>

      <div className="footer-divider" />

      <p className="footer-copyright">
        © 2026 Kai Yuan. All rights reserved.
      </p>
    </footer>
  );
}
