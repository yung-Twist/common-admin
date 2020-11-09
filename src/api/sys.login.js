import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request.post('/v1/admin/login/index', data)
}
