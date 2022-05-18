import Vue from 'vue'
import './plugins/base'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	vuetify,
	store,
	router,
	render: h => h(App),
}).$mount('#app')
