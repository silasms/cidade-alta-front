import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { api } from "../service/axios";

interface AuthContextValue {
  token: string
  signin: (token: string) => object
  verifyAuth: () => void
  setToken: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext({} as AuthContextValue)

function AuthProvider({ children }: { children: React.ReactNode}) {
  const [ token, setToken ] = useState('')

  const signin = async (token: string) => {
    if (token !== '') return
    const response = await api.post("/users/validatetoken", { token })
    setToken(token)
    return response.data
  }

  const verifyAuth = async () => {
    await signin(token)
  }

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: token,
        signin,
        verifyAuth,
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }