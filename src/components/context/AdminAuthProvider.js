import { createContext, useState } from "react";

const AdminAuthContext = createContext({});

export const AdminAuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const getPersist = JSON.parse(localStorage.getItem("persist"));
    const [persist, setPersist] = useState(getPersist || false);

    return (
        <AdminAuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AdminAuthContext.Provider>
    )
}

export default AdminAuthContext;