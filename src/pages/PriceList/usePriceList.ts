import { useEffect, useState } from "react";
import type { PriceItem, SheetResponse } from "../../types/priceList";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1xKuJM4haI3m68Ieuk4s5ub54M1M8Iya0FSh1pO8e-9Q/gviz/tq?tqx=out:json&gid=0";

function parseGvizJson(text: string): SheetResponse {
  return JSON.parse(text.substring(47).slice(0, -2));
}

function mapRowsToPriceItems(response: SheetResponse): PriceItem[] {
  return response.table.rows.map((row) => {
    const c = row.c;
    return {
      imageUrl: String(c[1]?.v ?? ""),
      code: String(c[2]?.v ?? ""),
      shrinked: Number(c[3]?.v ?? 0),
      unshrinked: Number(c[4]?.v ?? 0),
      noBox: Number(c[5]?.v ?? 0),
      loosePack: Number(c[6]?.v ?? 0),
    };
  });
}

export function usePriceList() {
  const [data, setData] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        const json = parseGvizJson(text);
        setData(mapRowsToPriceItems(json));
      })
      .catch(() => setError("Failed to load price list"))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
