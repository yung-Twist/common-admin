import axios from '@/plugin/axios'

export function getAssistData(data) {
  return axios.post(data.url, data.data)
}
export function deleteRowData(data) {
  return axios.post(data.url, data.data)
}
