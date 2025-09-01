import { createContext } from "react";
import { allProductData } from "../assets/assets.js";


export const productContext = createContext();

export function ProductContextProvider({children}) {

    const contextValue = {
        allProductData,
    }

    return <productContext.Provider value={contextValue}>
        {children}
    </productContext.Provider>
}