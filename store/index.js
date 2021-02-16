import Vuex from 'vuex'
import contact from './modules/contact'
import posts from './modules/posts'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      contact: { ...contact, namespaced: true },
      blogposts: { ...posts, namespaced: true },
    },
    strict: false,
  })
}

export default createStore
