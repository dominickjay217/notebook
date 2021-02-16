import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export const state = {
  twitterLink: null,
  githubLink: null,
  linkedinLink: null,
}

export const mutations = {
  setTwitterLink(state, data) {
    state.twitterLink = data
  },
  setGitHubLink(state, data) {
    state.githubLink = data
  },
  setLinkedInLink(state, data) {
    state.linkedinLink = data
  },
}

export const actions = {
  getPageItems({ commit }) {
    client
      .getEntries({
        'sys.id': '15jwOBqpxqSAOy2eOO4S0m',
      })
      .then((person) => {
        if (person) {
          const twitterLink = person.items[0].fields.twitter,
            githubLink = person.items[0].fields.github,
            linkedinLink = person.items[0].fields.linkedin
          commit('setTwitterLink', twitterLink)
          commit('setGitHubLink', githubLink)
          commit('setLinkedInLink', linkedinLink)
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
