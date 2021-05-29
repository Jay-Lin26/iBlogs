import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  username: sessionStorage.getItem('username'),
	  is_login: false
  },
  mutations: {
	  setname(state, name){
	  	state.username = name
	  	sessionStorage.setItem('username', name)
	  },
	  cancel_login(state, b){
		state.is_login = b
		console.log(state.is_login)
	  }
  },
  actions: {},
  modules: {},
});
