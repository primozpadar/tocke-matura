export type ISplosnaKeys = "slo" | "mat" | "tuj" | "izb1" | "izb2" | "letnik3" | "letnik4";
export type IPoklicnaKeys = "slo" | "stro" | "izb1" | "izb2" | "letnik3" | "letnik4";

export type ITocke = {
  [key: string]: number; // TODO ISplosnaKeys | IPoklicnaKeys
};

export type IMozneTocke = 20 | 23;

export const initSplosna: ITocke = {
  slo: 2,
  mat: 2,
  tuj: 2,
  izb1: 2,
  izb2: 2,
  letnik3: 2,
  letnik4: 2,
};
