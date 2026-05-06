import React from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalProvider({children}){
    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    );
}

