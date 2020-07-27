export type ITockeKeys = "slo" | "stro" | "izb1" | "izb2" | "letnik3" | "letnik4";

export type ITocke = {
  [key in ITockeKeys]: number;
};

export type IMozneTocke = 20 | 23;
