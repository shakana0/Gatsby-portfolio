import React, { useState, createContext } from "react";
import { categoryData } from "../interface/pageInterface"

// interface childrenProps {
//   children: React.ReactNode;
// }

// //initiating useReduser varible
// const initialState = {
//     theme: "light"
// }

// // function reducer(state, action){

// // }

// const GlobalContextProvider = ({ children }: childrenProps) => {
//   return <div>{children}</div>;
// };

// export default GlobalContextProvider;

// interface categories{

// }

interface childrenProps {
  children: React.ReactNode;
}
interface GlobalContectType {
  categories: categoryData | null;
  setCategories: React.Dispatch<React.SetStateAction<categoryData | null>>;
}

//don't have to optinal chain the props later/ null check
export const GlobalStateContext = createContext({} as GlobalContectType);
// export const GlobalStateContext = createContext<GlobalContectType | null>(null);


export const GlobalContextProvider = ({ children }: childrenProps) => {
  const [categories, setCategories] = useState<categoryData | null>(null);

  return (
    <GlobalStateContext.Provider value={{ categories, setCategories }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// export default GlobalContextProvider;
