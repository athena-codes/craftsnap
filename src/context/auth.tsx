// conetxt API - user & isLoading
import { User } from 'firebase/auth'
import { FC, createContext, useState } from "react";

// create context
interface AuthContextType {
    user: User | null,
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading:false
})


// create provider
interface AuthProviderProps {
    children: React.ReactElement
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

    const [ user, setUser] = useState<User  | null>(null)
    const [ isLoading, setIsLoading] = useState<boolean>(false)

    const value = {
        user,
        isLoading
    }


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}
