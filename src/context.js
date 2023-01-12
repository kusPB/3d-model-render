import { createContext, useContext, useState } from "react";

const Context = createContext();

export function DataContextProvider({ children }) {
  const [dataContext, setDataContext] = useState();
  return (
    <Context.Provider value={[dataContext, setDataContext]}>
      {children}
    </Context.Provider>
  );
}

export function useDataContext() {
  return useContext(Context);
}
