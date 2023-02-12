import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('qwe');
    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;