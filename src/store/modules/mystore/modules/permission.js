const state = {
  managerRoleAuthority: new Map(),
  routes: [],
  menuDatas: []
}

const mutations = {
  SET_AUTHORITY: (state, managerRoleAuthority) => {
    state.managerRoleAuthority = managerRoleAuthority
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },
  SET_MENUDATAS: (state, menuDatas) => {
    state.menuDatas = menuDatas
  }
}

const actions = {
  generateAuthority ({ commit }, managerRoleAuthority) {
    return new Promise(resolve => {
      commit('SET_AUTHORITY', managerRoleAuthority)
      resolve(managerRoleAuthority)
    })
  },
  generateRoutes ({ commit }, routes) {
    return new Promise(resolve => {
      commit('SET_ROUTES', routes)
      resolve(routes)
    })
  },
  generateMenuDatas ({ commit }, menuDatas) {
    return new Promise(resolve => {
      commit('SET_MENUDATAS', menuDatas)
      resolve(menuDatas)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
