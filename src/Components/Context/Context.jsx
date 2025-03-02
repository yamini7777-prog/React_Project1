//! Context.jsx
import React, { createContext, useContext, useReducer, useState } from "react";

export let ContextApi = createContext();
let { Provider } = ContextApi;
const Context = ({ children }) => {
    let [globaldata, setGlobaldata] = useState("");
    return (
        <Provider value={{ globaldata, setGlobaldata }}>{children}</Provider>
    )
}
export default Context;