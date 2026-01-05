import { Routes, Route } from "react-router";
import { PriceList } from "../pages/PriceList";
import { ContactUs } from "../pages/ContactUs";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PriceList />} />
      <Route path="contactus" element={<ContactUs />} />
    </Routes>
  );
};
