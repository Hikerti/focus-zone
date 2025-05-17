import { HttpMethod } from "@/helpers/type/type.ts"

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

export interface useGetStore {
    users: UserFullData[] | null
    isError: boolean,
    isPending: boolean,
    login: boolean

    setUser: (user: UserFullData) => void
    clearUser: () => void,
    setLogin: (loginUser: boolean) => void,
}