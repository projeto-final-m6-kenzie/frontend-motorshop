/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IAuthContext, ILoginUser, IUserProviderProps } from '../interfaces'
import api from '../services/api'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@context-demo:token')

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`
        } catch (error) {
          console.error(error)
        }
      }
      setLoading(false)
    }

    loadUser()
  }, [])

  const loginUser = async (data: ILoginUser) => {
    try {
      const response = await api.post('/users/login', data)
      const { user, token } = response.data
      api.defaults.headers.authorization = `Bearer ${token}`
      setUser(user)
      localStorage.setItem('@context-demo:token', token)
      const toNavigate = location.state?.from?.pathname || 'product'
      navigate(toNavigate, { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ loginUser, loading, user }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
