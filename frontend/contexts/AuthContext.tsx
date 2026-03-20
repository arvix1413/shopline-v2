'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type User = { id: number; email: string; name: string; isAdmin: number }

type AuthContextType = {
  user: User | null
  token: string | null
  isLoading: boolean
  login: (token: string, user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null, token: null, isLoading: true,
  login: () => {}, logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = localStorage.getItem('token')
    const u = localStorage.getItem('user')
    if (t && u) { setToken(t); setUser(JSON.parse(u)) }
    setIsLoading(false)
  }, [])

  const login = (t: string, u: User) => {
    localStorage.setItem('token', t)
    localStorage.setItem('user', JSON.stringify(u))
    setToken(t); setUser(u)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null); setUser(null)
  }

  return <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
