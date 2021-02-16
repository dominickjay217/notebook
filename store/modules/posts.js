import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export const state = {
  posts: null,
}

export const mutations = {
  setPosts(state, data) {
    state.posts = data
  },
}

export const actions = {
  getPageItems({ commit }) {
    client
      .getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
      })
      .then((entries) => {
        if (entries) {
          const posts = entries.items
          console.log(posts)
          commit('setPosts', posts)
        }
      })
      .catch((err) => {
        console.log('error', err)
      })
  },
}

export default {
  state,
  mutations,
  actions,
}
