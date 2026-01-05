import { useEffect, useState } from "react";

type SheetResponse = {
  table: {
    cols: { label: string }[];
    rows: { c: { v: any }[] }[];
  };
};

function parseGvizJson(text: string): SheetResponse {
  return JSON.parse(text.substring(47).slice(0, -2));
}

export function PriceList() {
  const [data, setData] = useState<SheetResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url =
      "https://docs.google.com/spreadsheets/d/1xKuJM4haI3m68Ieuk4s5ub54M1M8Iya0FSh1pO8e-9Q/gviz/tq?tqx=out:json&gid=0";

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const json = parseGvizJson(text);
        setData(json);
      })
      .catch(() => {
        setError("Failed to load sheet data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading price list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Price List</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
