import type { PriceItem } from "../../types/priceList";
import "./PriceTable.css";

type Props = {
  items: PriceItem[];
};

export function PriceTable({ items }: Props) {
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Code</th>
          <th>Shrinked</th>
          <th>Unshrinked</th>
          <th>No Box</th>
          <th>Loose Pack</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.code}>
            <td>
              <img src={item.imageUrl} alt={item.code} />
            </td>
            <td>{item.code}</td>
            <td>{item.shrinked}</td>
            <td>{item.unshrinked}</td>
            <td>{item.noBox}</td>
            <td>{item.loosePack}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
