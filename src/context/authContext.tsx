import React, { createContext, useState } from "react";
import { api } from "../service/axios";

interface AuthContextValue {
  signin: () => Promise<string>
  user: User
  setUser: React.Dispatch<React.SetStateAction<{ id: string, name: string, password: string, tags: UserTag[]}>>
}

interface User {
  id: string
  name: string
  password: string
  tags: UserTag[]
}

interface UserTag {
  id: string
  tagId: string
  userId: string
  tag: Tag
}

interface Tag {
  categoryId: number
  id: string
  image: string
  name: string
  slug: string
}

const AuthContext = createContext({} as AuthContextValue)

function AuthProvider({ children }: { children: React.ReactNode}) {
  const [ user, setUser ] = useState({} as User)

  const signin = async (): Promise<string> => {
    const response = await api.post("/users/validatetoken", { token: localStorage.getItem('token') })
    const userId = response.data.id
    localStorage.setItem('id', userId)
    return userId
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }