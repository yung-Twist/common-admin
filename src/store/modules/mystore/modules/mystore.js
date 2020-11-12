import { getAssistData, deleteRowData } from '@/api/myapi'
import { MessageBox } from 'element-ui'
import { Message } from 'element-ui'
const state = {}

const mutations = {

}

const actions = {
  GETASSISTDATA({ commit }, obj) {
    return new Promise(resolve => {
      getAssistData(obj).then(res => {
        resolve(res)
      })
    })
  },
  DELETEROWDATA({ commit }, obj) {
    return new Promise(resolve => {
      MessageBox.confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteRowData(obj).then(res => {
          if (res.data) {
            resolve(res)
            Message({
              type: 'success',
              message: '删除成功'
            })
          }
        })
      }).catch(() => {
        Message({
          type: 'info',
          message: '已取消删除'
        })
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
