import { useEffect, useState } from 'react'
import { http } from './http'

const useFetch = () => {
  const [data, setData] = useState<Record<string, any>>({})
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const post = async <Response>(url: string, payload: any, key: string) => {
    setError(true)
    try {
      const response = await http.post<Response>(url, payload)
      setData((prev) => ({ ...prev.data, [key]: response }))
      return response
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const get = async (url: string, key: string) => {
    setLoading(true)
    try {
      const response = await http.get(url)
      if (data[key]) {
        // mutate update 관련해서 작업
      }
      setData((prev) => ({ ...prev.data, [key]: response }))
      return response
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const remove = async (url: string) => {
    setLoading(true)
    try {
      const response = await http.delete(url)
      return response
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { get, post, remove, data, error, loading }
}

export default useFetch
