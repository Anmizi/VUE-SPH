import { reqCategoryList } from '@/api'
// state:仓库存储数据的地方
const state = {
  categoryList: []
}

// mutations:修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, data) {
    state.categoryList = data
  }
}

// action: 处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async categoryList({ commit }) {
    const res = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
    }

  }
}

//getters: 理解为计算属性，用于简化仓库数据的获取
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}