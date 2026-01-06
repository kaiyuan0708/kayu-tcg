// src/types/priceList.ts

export type SheetCell = {
  v?: string | number | null;
  f?: string;
};

export type SheetRow = {
  c: SheetCell[];
};

export type SheetColumn = {
  label: string;
  type: string;
};

export type SheetResponse = {
  table: {
    cols: SheetColumn[];
    rows: SheetRow[];
  };
};

export type PriceItem = {
  imageUrl: string;
  code: string;
  shrinked?: number;
  unshrinked?: number;
  noBox?: number;
  loosePack?: number;
};
