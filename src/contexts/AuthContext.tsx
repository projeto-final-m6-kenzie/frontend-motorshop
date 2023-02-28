/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IAuthContext, IRegisterUser, IUserProviderProps } from '../interfaces'
import api from '../services/api'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@context-demo:token')

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`

          const { data } = await api.get('/profile')

          setUser(data)
        } catch (error) {
          console.error(error)
        }
      }

      setLoading(false)
    }

    loadUser()
  }, [])

  async function registerUser(data: IRegisterUser) {
    try {
      const response = await api.post('/login', data)

      const { user: userResponse, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`

      setUser(userResponse)
      localStorage.setItem('@context-demo:token', token)

      const toNavigate = location.state?.from?.pathname || 'product'

      navigate(toNavigate, { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ registerUser, loading }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
