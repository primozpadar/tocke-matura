import React, { createContext, useState, useEffect } from "react";
import { ITocke, initSplosna } from "../types/TockeTypes";

import { convertSplosnaMatura } from "../helpers/convertSplosnaMatura";

export const SplosnaContext = createContext(
  {} as {
    tocke: ITocke;
    setTocke: React.Dispatch<React.SetStateAction<ITocke>>;
    totalT: number;
  }
);

const SplosnaContextProvider: React.FC = ({ children }) => {
  const [tocke, setTocke] = useState<ITocke>(initSplosna);
  const [totalT, setTotalT] = useState<number>(0);

  useEffect(() => {
    const { slo, mat, tuj, izb1, izb2, letnik3, letnik4 } = tocke;
    const tockeMatura = (convertSplosnaMatura(slo + mat + tuj + izb1 + izb2) || 0) * 0.6;
    if (tockeMatura === 0) return;

    const tockeUspeh = (letnik3 + letnik4) * 4;
    setTotalT(tockeMatura + tockeUspeh);
  }, [tocke]);

  return <SplosnaContext.Provider value={{ tocke, setTocke, totalT }}>{children}</SplosnaContext.Provider>;
};

export default SplosnaContextProvider;
