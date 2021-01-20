import Vue from 'vue'
import Vuex from 'vuex'
import { getAllContacts } from '../api/contact'; 

Vue.use(Vuex)

const state = () => ({
  contacts: [],
  selected: []
})

const getters = {
  getAllProducts: (state) => {
    return state.contacts 
  }, 
}

const mutations = {
  setContacts(state, contacts) {
    state.contacts = contacts
  },
  incrementSelected(state, _id) {
    state.selected.push(_id)
  },
  decrementSelected(state, _id) {
    state.selected = state.selected.filter(select => select !== _id)
  },
  deleteSelected(state) {
    state.selected = []
  },
  updateContacts(state) {
    state.contacts = state.contacts.filter(contact => !state.selected.includes(contact._id))
  }
}

const actions = {
  getAllContacts ({commit}) {
    getAllContacts().then(res => {
      commit('setContacts', res.data || [])
    })
  },
  updateSelected({state, commit}, _id) {
    const selected = state.selected.find(select => select === _id)
    if (selected) {
      commit('decrementSelected',  _id )
    } else {
      commit('incrementSelected',  _id )
    }
  },
  deleteSelected({state, commit}) {
    commit('updateContacts', state.selected)
    commit('deleteSelected')
  }
}

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
})