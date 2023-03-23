import axios from 'axios'

const iAxios = axios.create({
  headers: { Accept: 'application/json' },
  baseURL: 'https://api.ssung.app',
})

export const http = {
  get: function get<Response = unknown>(url: string) {
    return iAxios.get<Response>(url).then((res) => res.data)
  },
  post: function post<Request, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return iAxios.post<Response>(url, data).then((res) => res.data)
  },
  delete: function del<Response = unknown>(url: string) {
    return iAxios.delete<Response>(url).then((res) => res.data)
  },
}
