import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useReadProps, useReadReturn } from "../interface/interface.ts"

export const useReadFetcher = <T>({ url, method = "get", queryKey }: useReadProps): useReadReturn<T> => {
    const { isPending, isError, data } = useQuery<T>({
      queryKey: [queryKey],
      queryFn: async () => {
        if (method == 'get') {
          return (await axios.get(url)).data
        }
      },
    })

    return {data, isPending, isError}
  }