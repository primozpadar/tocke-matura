import React, { createContext, useState, useEffect } from "react";
import { ITocke, IMozneTocke } from "../types/PoklicnaTypes";

import { convert23, convert20 } from "../helpers/convertPoklicnaMatura";

export const PoklicnaContext = createContext(
  {} as {
    tocke: ITocke;
    setTocke: React.Dispatch<React.SetStateAction<ITocke>>;
    totalT: number;
    mozneTocke: IMozneTocke;
    setMozneTocke: React.Dispatch<React.SetStateAction<IMozneTocke>>;
  }
);

const PoklicnaContextProvider: React.FC = ({ children }) => {
  const [mozneTocke, setMozneTocke] = useState<IMozneTocke>(20);
  const [tocke, setTocke] = useState<ITocke>({ slo: 2, stro: 2, izb1: 2, izb2: 2, letnik3: 2, letnik4: 2 });
  const [totalT, setTotalT] = useState<number>(0);

  useEffect(() => {
    console.log(tocke);
    const { slo, stro, izb1, izb2, letnik3, letnik4 } = tocke;
    const sumMatura = slo + stro + izb1 + izb2;
    const tockeMatura = mozneTocke === 23 ? convert23(sumMatura) * 0.6 : convert20(sumMatura) * 0.6;
    const tockeUspeh = (letnik3 + letnik4) * 4;
    console.log(tockeUspeh);

    setTotalT(tockeMatura + tockeUspeh);
  }, [mozneTocke, tocke]);

  return (
    <PoklicnaContext.Provider value={{ tocke, setTocke, totalT, mozneTocke, setMozneTocke }}>
      {children}
    </PoklicnaContext.Provider>
  );
};

export default PoklicnaContextProvider;
