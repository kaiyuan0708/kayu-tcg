import { useTranslation } from "react-i18next";
import type { PriceItem } from "../../types/priceList";
import "./PriceTable.css";

type Props = {
  items: PriceItem[];
};

export function PriceTable({ items }: Props) {
  const { t } = useTranslation();

  return (
    <table className="price-table">
      <thead>
        <tr>
          <th>{t("product")}</th>
          <th></th>
          <th>{t("shrinked")}</th>
          <th>{t("unshrinked")}</th>
          <th>{t("noBox")}</th>
          <th>{t("loosePack")}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.code}>
            <td className="image-cell">
              <img src={item.imageUrl} alt={item.code} />
            </td>
            <td>{item.code}</td>
            <td>
              <div className="price-cell">
                <span className="price-value">{item.shrinked}</span>
                <span className="price-desc">({t("shrinked")})</span>
              </div>
            </td>

            <td>
              <div className="price-cell">
                <span className="price-value">{item.unshrinked}</span>
                <span className="price-desc">({t("unshrinked")})</span>
              </div>
            </td>

            <td>
              <div className="price-cell">
                <span className="price-value">{item.noBox}</span>
                <span className="price-desc">({t("noBox")})</span>
              </div>
            </td>

            <td>
              <div className="price-cell">
                <span className="price-value">{item.loosePack}</span>
                <span className="price-desc">({t("loosePack")})</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
