import { useNavigate } from "react-router-dom";

export function AppHeader() {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate("/")}>Main</button>
      <button onClick={() => navigate("/contactus")}>Contact</button>
    </header>
  );
}
