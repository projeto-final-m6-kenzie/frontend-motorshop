import { ReactNode } from 'react'

export interface ICarrosselInfo {
  title: string
  info: string
  img: string
}

export interface IHeaderInfo {
  title?: string
  subtitle?: string
  button?: string
}

export interface IProductView {
  img: string
  name: string
  descricao: string
  price?: string
}

export interface IContext {
  openModal: () => void
  closeModal: () => void
  modalIsOpen: boolean
}

export interface IUserProviderProps {
  children: ReactNode
}
