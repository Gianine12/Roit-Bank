import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state  = { 
    list: [], 
    title: String,
    isModalVisible: false,
    isExcluse: false,
    cad: Object,
    
    user: {},
    token: '',
}

const actions = {

    setCad( { commit }, value){
        commit('setCad', value)
    },

    addList({ commit }, item){
        return new Promise(() => {
            item.key = Date.now()
            commit('addList', item)
        })
    },

    setTitle( { commit }, titulo) {
        commit('setTitle', titulo)
    },

    setModalVisible( { commit}, visible) {
        return  new Promise( () => {
            commit('setModalVisible', visible)
        })
    },

    setExcluse( { commit }, value) {
        return new Promise( () => {
            commit('setExcluse', value)
        })
    },

    removeItem( { commit }, value){
        return new Promise( () => {
            commit('removeItem', value)
        })
    },

    setUser( { commit }, value){
        commit('setUser', value)
    },

    setToken( { commit }, value){
        commit('setToken', value)
    },
}

const mutations = {

    setUser(state,payload){
        state.user = payload
    },

    setToken(state,payload){
        state.token = payload
    },

    setCad(state, payload){
        state.cad = payload
    },

    addList(state, payload) { 
        state.list.push(payload)
    },

    setTitle(state, payload) {
        state.title = payload
    },

    setModalVisible(state, payload) {
        state.isModalVisible = payload
    },

    setExcluse(state, payload) {
        state.isExcluse = payload
    },

    removeItem(state, payload) {
        const index = state.list.findIndex(item => item.key === payload.key)
        if (index > -1){
            Vue.delete(state.list, index)
        }
    },
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store

