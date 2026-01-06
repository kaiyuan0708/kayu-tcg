import { usePriceList } from "./usePriceList";
import { PriceTable } from "../../components/PriceTable/PriceTable";
import "./PriceList.css";

export function PriceList() {
  const { data, loading, error } = usePriceList();

  if (loading) return <p>Loading price list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="price-list-page">
      <h1>Price List</h1>
      <PriceTable items={data} />
    </div>
  );
}
