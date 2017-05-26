import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    username: '',
    fullname: '',
    id: -1
  },
  getters: {
    username: state => {
      return state.username
    }
  },
  
  actions: {

    getProfile: (context, payload) => {
      return Vue.http.get('https://develop.penetrace.com/api/v1/NO/Authorization/Profile')
      .then((r) => {
        if(r.data.active == true) return r.data
        return null
      })
    },

    getNavigation: (context, payload) => {
      return Vue.http.get('https://develop.penetrace.com/api/v1/en/UI/Navigation/a635721305369502872')
      .then((r) => {
        return r.data
      })
    },

    logout: (context, payload) => {
      return Vue.http.get('https://develop.penetrace.com/api/v1/NO/Authorization/Logout')
      .then((r) => {
        context.commit('logout')
      })
    },

    login: (context, payload) => {
      return Vue.http.post('https://develop.penetrace.com/api/v1/NO/Authorization/Logon', {
        username: payload.username,
        password: payload.password,
        rememberMe: payload.rememberMe
      })
      .then((r) => {
        context.commit('storeUser', r.data)
        return r.data
      })
    },
    storeUser: (context, payload) => {
      context.commit('storeUser', payload)
    }
  },
  mutations: {
    logout: (state) => {
      state.id = -1;
      state.username = '';
      state.fullname = '';
    },

    storeUser: (state, payload) => {
      state.id = payload.id;
      state.username = payload.username;
      state.fullname = payload.fullname;
    }
  }
});
