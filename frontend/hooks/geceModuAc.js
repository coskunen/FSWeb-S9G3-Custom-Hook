import { useState } from "react";
import useLocalStorage from "./localStorageKullan";
const  useGeceModu = (initialState) => {
    const [geceModuHook, setGeceModuHook] = useLocalStorage("gecemodukey" ,initialState);

    return [geceModuHook , setGeceModuHook];
}

export default useGeceModu;