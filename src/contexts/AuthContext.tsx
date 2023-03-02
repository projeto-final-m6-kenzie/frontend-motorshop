/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IAuthContext, ILoginUser, IUser, IUserProviderProps } from '../interfaces'
import api from '../services/api'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@context-demo:token')
      const userId = localStorage.getItem('@context-demo:userId')
      console.log(token)
      if (token && userId) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`
          api
            .get(`/users/${userId}`)
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err))
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
      localStorage.setItem('@context-demo:userId', user.id)
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
