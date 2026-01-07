import { useTranslation } from "react-i18next";
import { usePriceList } from "./usePriceList";
import { PriceTable } from "../../components/PriceTable/PriceTable";
import "./PriceList.css";

export function PriceList() {
  const { t } = useTranslation();
  const { data, loading, error } = usePriceList();

  if (loading) return <p>Loading price list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="price-list-page">
      <h1>{t("pricelist")}</h1>
      <p>{t("description")}</p>
      <PriceTable items={data} />
    </div>
  );
}
