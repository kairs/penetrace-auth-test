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
    getNavigation: (context, payload) => {
      return Vue.http.get('https://develop.penetrace.com/api/v1/en/UI/Navigation/a635721305369502872', {
        //credentials: true
      })
      .then((r) => {
        return r.data
      })
    },

    logout: (context, payload) => {
      return Vue.http.get('https://develop.penetrace.com/api/v1/NO/Authorization/Logout', {
      }, {
        //credentials: true
      })
      .then((r) => {
        context.commit('logout')
      })
    },
    login: (context, payload) => {
      return Vue.http.post('https://develop.penetrace.com/api/v1/NO/Authorization/Logon', {
        username: payload.username,
        password: payload.password,
        rememberMe: payload.rememberMe
      }, {
        //credentials: true
      })
      .then((r) => {
        context.commit('login', r.data)
        return r.data
      })
    }
  },
  mutations: {
    logout: (state) => {
      state.id = -1;
      state.username = '';
      state.fullname = '';
    },

    login: (state, payload) => {
      state.id = payload.id;
      state.username = payload.username;
      state.fullname = payload.fullname;
    }
  }
});
