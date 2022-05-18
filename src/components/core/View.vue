<template>
	<div>
		<section id="welcome">
			<welcome />
		</section>

		<section id="register">
			<register-form />
		</section>

		<section id="services">
			<services />
		</section>
		<!-- <about-me /> -->

		<section id="contact">
			<get-in-touch />
		</section>
	</div>
</template>

<script>
export default {
	name: 'CoreView',
	components: {
		// AboutMe: () => import('@/components/AboutMe'),
		GetInTouch: () => import('@/components/GetInTouch'),
		// RecentProjects: () => import('@/components/RecentProjects'),
		RegisterForm: () => import('@/components/RegisterForm'),
		Services: () => import('@/components/Services'),
		Welcome: () => import('@/components/Welcome2'),
	},
	data: () => ({
		debug: false,
		offset: 0,
		viewIndex: 0,
		views: [
			'welcome',
			'register',
			'services',
			'contact',
		],
	}),
	computed: {
		/*
		view () {
			return this.views[this.viewIndex]

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
		},
		*/
		isLoggedIn () {
			if (this.$store.state.app && Object.keys(this.$store.state.app).includes('user') && this.$store.state.app.user.isLoggedIn) {
				return true
			} else {
				return false
			}
		},
	},
	created () {

	},
	methods: {

	},
}
</script>
