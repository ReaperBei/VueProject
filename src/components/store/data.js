let state = {
  tabIndex: 0
}
let mutations = {
  chang (state, index) {
    state.tabIndex = parseInt(index)
  }
}
let actions = {
}
let getters = {
}
export default {
  state,
  mutations,
  actions,
  getters
}
