<template>
	<div
		v-scroll="onScroll"
	>
		<div style="position:fixed;top:-500;right:50;">
			{{ offset }}
			{{ viewIndex }}
		</div>
		<v-sheet
			:height="(windowHeight+400)"
			color="accent"
			class="pl-10 pr-10"
			style="margin-top:64px;margin-bottom:88px;"
		>
			<v-card
				class="p-5"
				height="80vh"
				color="info"
			>
				some text
				<!-- <component :is="view" /> -->
			</v-card>
		</v-sheet>
	</div>
</template>

<script>
export default {
	name: 'CoreView',
	components: {
		/*
		// AboutMe: () => import('@/components/AboutMe'),
		ContactView: () => import('@/components/GetInTouch'),
		// RecentProjects: () => import('@/components/RecentProjects'),
		RegisterView: () => import('@/components/RegisterForm'),
		ServicesView: () => import('@/components/Services'),
		WelcomeView: () => import('@/components/Welcome'),
		*/
	},
	data: () => ({
		debug: false,
		offset: 0,
		viewIndex: 0,
		timerid: 0,
		windowHeight: 0,
		views: [
			'welcome-view',
			'register-view',
			'services-view',
			'contact-view',
		],
	}),
	computed: {
		/*
		user () {
			return this.$store.state.app.user
		},
		*/
		view () {
			return this.views[this.viewIndex]
			/*
			if (this.offset < 1201) {
				return 'welcome'
			} else if (this.offset > 1200 && this.offset < 2401) {
				return 'register'
			} else if (this.offset > 2400 && this.offset < 3601) {
				return 'services'
			} else if (this.offset > 3600 && this.offset < 4801) {
				return 'contact'
			} else {
				return ''
			}
			*/
		},
		isLoggedIn () {
			if (this.$store.state.app && Object.keys(this.$store.state.app).includes('user') && this.$store.state.app.user.isLoggedIn) {
				return true
			} else {
				return false
			}
		},
	},
	mounted () {
		this.windowHeight = window.innerHeight
		window.addEventListener('resize', () => {
			this.windowHeight = window.innerHeight
		})
	},
	created () {

	},
	methods: {
		onScroll () {
			if (window.pageYOffset % 100) {
				// console.log('scroll every 100', this.offset, window.pageYOffset)
				if (this.timerid) {
					clearTimeout(this.timerid)
				}
				if (this.offset < window.pageYOffset && this.offset > (this.windowHeight * 0.8)) {
					// scrolling down the page
					this.timerid = setTimeout(() => {
						this.doScroll('down', this.offset, window.pageYOffset)
					}, 350)
				} else if (this.offset > window.pageYOffset) {
					// scrolling back up the page
					this.timerid = setTimeout(() => {
						this.doScroll('up', this.offset, window.pageYOffset)
					}, 500)
				}
				// console.log('scroll every 100', window.pageYOffset)
				this.offset = window.pageYOffset
			}
			// console.log('onScroll Y offset:', window.pageYOffset)
		},
		doScroll (direction, oldY, newY) {
			// if()
			console.log('doScroll', direction, oldY, newY)
			if (direction === 'down') {
				this.viewIndex += 1
			} else {
				this.viewIndex -= 1
			}
			return true
		},
	},
}
</script>
