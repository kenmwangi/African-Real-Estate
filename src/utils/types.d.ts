import type { categories } from "src/constants/config";

export type DateTime = {
  justDate: Date | null;
  dateTime: Date | null;
};

type Categories = (typeof categories)[number];
