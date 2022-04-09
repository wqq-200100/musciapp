import { createStore } from 'vuex'


export default createStore({
  state() {
    return {
      musicUrl: '',
      musicInfo: {
        name:'',

      }
    }
  },
  mutations: {
    musicUrlSetter(state, { musicUrl, musicInfo }) {
      state.musicUrl = musicUrl
      state.musicInfo = musicInfo
    }
  }
})

