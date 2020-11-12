import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request.post('/auth/login', data)
}
