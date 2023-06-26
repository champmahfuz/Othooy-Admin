import { useContext } from "react";

import ValueContext from "../context/ValueProvider";

const useValue = () => {
    return useContext(ValueContext);
}

export default useValue;