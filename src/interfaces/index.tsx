export interface ICarrosselInfo {
  title: string
  img?: string
  price?: number
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
}
