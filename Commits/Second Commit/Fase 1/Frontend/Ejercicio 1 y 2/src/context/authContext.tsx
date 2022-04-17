import { createContext, useContext, useState } from "react";

type Props = {
    children: Object,
}

type TokenContent = {
    token: string,
    setToken: (token: string) => void
}

export const AuthContext = createContext<TokenContent>({
    token: '',
    setToken: () => {}
})

export const AuthProvider = ({ children }: Props) => {
    const [token, setToken] = useState<string>('')

    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)