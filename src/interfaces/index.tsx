/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

export interface ICarrosselInfo {
  title?: string
  img?: string
  imageCar?: string
  price?: string | number
  vehicleType?: string
  description?: string
  coverPhoto?: {
    url: string
  }
  id?: string
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
  setNewVehicle: any
  vehicles: any
}

export interface IUserProviderProps {
  children: ReactNode
}

export interface IRegisterUser {
  email: string
  password: string
}

export interface IAuthContext {
  registerUser(data: IRegisterUser): void
  loading: boolean
}
