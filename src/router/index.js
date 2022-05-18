import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: store.state.app.routes, // routes defined in data store
	/*
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			if (to.hash) {
				return {
					selector: to.hash,
					// , offset: { x: 0, y: 10 }
				}
			} else {
				return false
			}
		}
	},
	*/
})

router.beforeEach((to, from, next) => {
	console.log('router beforeEach', to, from, next)
	if (to && Object.keys(to).includes('meta') && to.meta && Object.keys(to.meta).includes('loginRequired') && to.meta.loginRequired) {
		console.log('loginRequired!')
		if (!store.state.app.user.isLoggedIn) {
			next('/')
		}
	}
	next()
})
/*
router.afterEach((to) => {
	//console.log('router after each', to);
});

*/

export default router
