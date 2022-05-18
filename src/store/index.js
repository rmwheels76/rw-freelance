import Vue from 'vue'
import Vuex from 'vuex'

// Global vuex
import AppModule from './app'

// Metamask vuex
// import MetamaskModule from './metamask'

// Cart vuex
// import CartModule from './cart'

Vue.use(Vuex)

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
	modules: {
		app: AppModule,
		// metamask: MetamaskModule,
		// cart: CartModule,
	},
})

export default store
