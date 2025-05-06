import { HttpMethod } from "./type"

export interface useReadReturn<T> {
    data?: T
    isPending: boolean
    isError: boolean
  }

export interface useReadProps {
    url: string,
    method?: HttpMethod,
    queryKey: string
}

export interface UserFullData {
  id: string
  email: string
  password: string
  adress: string
  phone: string
  name: string
  surname: string
  login: string
  description: string
  createdAt: string
  updatedAt: string
}