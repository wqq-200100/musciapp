import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      musicUrl: '',
      musicInfo: {
        name: '',
        picUrl: '',
        id:''
      },
      isActive: false,
      bofangqiDOM: null,
      Lyric:'',
      currentTime:0,
    }
  },
  mutations: {
    musicUrlSetter(state, { musicUrl, musicInfo}) {
      state.musicUrl = musicUrl
      state.musicInfo = musicInfo
    },
    changeActive(state) {
      state.isActive = !state.isActive
    },
    setBofangqiDOM(state, dom){
      state.bofangqiDOM = dom
    },
    setLyric(state,Lyric){
      state.Lyric = Lyric
    },
    setCurrentTime(state,time){
      state.currentTime = time
    }
  }
})

