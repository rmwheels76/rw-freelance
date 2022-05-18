// import configs from '../../configs'
import mutations from './mutations'
import actions from './actions'

// const { product, theme  } = configs
// const { isRTL, globalTheme } = theme

// state initial values
const state = {
	screen: {
		height: 1200,
		width: 800,
		header: 78,
		body: 1054,
		footer: 68,
	},
	innerHeight: 1200,
	headerHeight: 78,
	footerHeight: 68,
	dialogCounter: 0,
	dialog: {
		slug: '',
		on: false,
		title: '',
		component: '',
	},
	dialogs: {
		login: {
			on: true,
			title: 'Login',
			component: 'LoginForm',
			slug: 'login',
		},
		register: {
			on: true,
			title: 'Register',
			component: 'RegisterForm',
			slug: 'register',
		},
	},
	alert: {
		on: true,
		context: 'login',
		type: 'info',
		text: 'this is an alert',
	},
	user: {
		isLoggedIn: false,
		data: {

		},
	},
	photoSnackbar: {
		on: false,
		text: '',
	},
	images: {
		deskstormtrooper: {
			// src: '@/assets/unsplash/alexandru-acea-2S4Z6OQbyjE-unsplash.jpg',
			src: 'alexandru-acea-2S4Z6OQbyjE-unsplash',
			alt: 'Photo by Alexandru Acea on Unsplash',
			photographer: 'Alexandru Acea',
			fullCredit: 'Photo by <a target="_NEW" href="https://unsplash.com/@alexacea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandru Acea</a> on <a target="_NEW" href="https://unsplash.com/s/photos/office-desktop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
		},
		deskhighway: {
			src: 'kevin-bhagat-VvbPNcuFvL8-unsplash',
			alt: 'Photo by Kevin Bhagat on Unsplash',
			photographer: 'Kevin Bhagat',
			fullCredit: 'Photo by <a target="_NEW" href="https://unsplash.com/@kevnbhagat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Bhagat</a> on <a target="_NEW" href="https://unsplash.com/s/photos/alexandru-acea-desk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
		},
		deskwood: {
			src: 'dillon-shook-mY3_bvR74fI-unsplash2',
			alt: 'Photo by Dillon Shook on Unsplash',
			photographer: 'Dillon Shook',
			fullCredit: 'Photo by <a target="_NEW" href="https://unsplash.com/@kevnbhagat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Bhagat</a> on <a target="_NEW" href="https://unsplash.com/s/photos/alexandru-acea-desk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
		},
		architecture: {
			src: 'lycs-architecture-U2BI3GMnSSE-unsplash',
			alt: 'Photo by LYCS Architecture on Unsplash',
			photographer: 'LYCS Architecture',
			fullCredit: 'Photo by <a target="_NEW" href="https://unsplash.com/@lycs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">LYCS Architecture</a> on <a target="_NEW" href="https://unsplash.com/s/photos/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
		},
	},
	routerKey: 0,
	routes: [
		{
			path: '/',
			redirect: '/welcome',
		},
		{
			path: '/welcome',
			name: 'welcome',
			component: () => import(/* webpackChunkName: "welcome" */ '@/components/Welcome2.vue'), // route level code-splitting, enables lazy loading and chunking
			meta: {
				label: 'Welcome',
				icon: '',
			},
		},
		{
			path: '/services',
			name: 'services',
			component: () => import(/* webpackChunkName: "services" */ '@/components/ServicesResponsive.vue'),
			meta: {
				label: 'Services',
				icon: '',
			},
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import(/* webpackChunkName: "contact" */ '@/components/GetInTouch.vue'),
			meta: {
				label: 'Contact',
				icon: '',
			},
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import(/* webpackChunkName: "dashboard" */ '@/components/TheDash.vue'),
			meta: {
				loginRequired: true,
				label: 'Dashboard',
				icon: '',
			},
		},
	],
	isWalletDrawer: false,
}

const getters = {
	getImage: (state) => (slug) => {
		for (const i in state.app.images) {
			if (i === slug) {
				return state.app.images[i]
			}
		}
		return {}
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions,
}
