import { BrowserRouter as Router } from "react-router";
import { AppHeader } from "./components/AppHeader";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <AppHeader />
      <AppRoutes />
    </Router>
  );
}

export default App;
