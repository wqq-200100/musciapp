import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      musicUrl: '',
      musicInfo: {
        name: ''
      },
      isActive: false,
      bofangqiDOM: null
    }
  },
  mutations: {
    musicUrlSetter(state, { musicUrl, musicInfo }) {
      state.musicUrl = musicUrl
      state.musicInfo = musicInfo
    },
    changeActive(state) {
      state.isActive = !state.isActive
    },
    setBofangqiDOM(state, dom){
      state.bofangqiDOM = dom
    }
  }
})

