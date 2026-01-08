import { Outlet } from "react-router-dom";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { AppFooter } from "../components/AppFooter/AppFooter";

export function MainLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
