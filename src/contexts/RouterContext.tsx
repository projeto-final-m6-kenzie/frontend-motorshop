import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

import { IContext, IUserProviderProps } from '../interfaces'

export const RouterContext = createContext<IContext>({} as IContext)

export const RouterProvider = ({ children }: IUserProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  function openUpdateProfileModal() {
    setModalUpdateIsOpen(true)
  }

  function closeUpdateProfileModal() {
    setModalUpdateIsOpen(false)
  }

  const [vehicles, setVehicles] = useState([])
  const [newVehicle, setNewVehicle] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/vehicles', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        },
      })
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <RouterContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        setNewVehicle,
        vehicles,
        openUpdateProfileModal,
        closeUpdateProfileModal,
        modalUpdateIsOpen,
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}
