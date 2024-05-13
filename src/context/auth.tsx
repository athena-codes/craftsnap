// conetxt API - user & isLoading

import { FC, createContext, useState } from "react";

// create context
export const AuthContext = createContext({
    user:null,
    isLoading:false
})


// create provider
interface AuthProviderProps {
    children: React.ReactElement
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

    const [ user, setUser] = useState(null)
    const [ isLoading, setIsLoading] = useState(null)

    const value = {
        user,
        isLoading
    }


    return <AuthContext.Provider value={}>{children}</AuthContext.Provider>

}
