import { createContext, useState, useEffect } from 'react'

import { IContext, IUserProviderProps } from '../interfaces'

export const RouterContext = createContext<IContext>({} as IContext)

export const RouterProvider = ({ children }: IUserProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <RouterContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {children}
    </RouterContext.Provider>
  )
}
