import "./AppFooter.css";

export function AppFooter() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <ul className="contact-list">
        <li>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/kaiiyuan98"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kaiiyuan98
          </a>
        </li>

        <li>
          <strong>Rednote:</strong> <span>4220452954 (只是一块木头)</span>
        </li>

        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/60188741578">+60 18-874 1578</a>
        </li>

        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:kaiyuan6953@gmail.com">kaiyuan6953@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}
