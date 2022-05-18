<template>
	<v-app-bar
		fixed
		flat
		color="black"
		app
		:height="height"
	>
		<!-- v-scroll="onScroll" :color="!isScrolling ? 'transparent' : 'white'" -->
		<v-slide-x-transition>
			<v-img
				v-if="showLogo"
				:src="require('@/assets/rw-logo2.png')"
				style="cursor: pointer;"
				:height="$vuetify.breakpoint.mdAndUp ? 40 : 30"
				:width="$vuetify.breakpoint.mdAndUp ? 350 : 262"
				contain
				left
				@click="$router.push({path:'/'})"
			/>
		</v-slide-x-transition>

		<v-spacer />

		<nav-bar />
		<!--
		<v-btn
			v-for="item in nav2"
			:key="item.to"
			:to="item.to"
			:color="item.color"
			text
		>
			{{ item.label }}
		</v-btn>
		-->

		<v-spacer />

		<span
			class="d-flex mt-5 pa-2"
		>
			<template v-if="!isLoggedIn">
				<v-menu
					offset-y
					rounded
				>
					<template v-slot:activator="{ on, attrs }">
						<template
							v-if="$vuetify.breakpoint.lgAndUp"
						>
							<v-btn
								color="white"
								class="mb-5"
								light
								outlined
								v-bind="attrs"
								v-on="on"
							>
								<v-icon
									class="mr-3"
								>
									mdi-account-outline
								</v-icon>
								Log In / Register
								<v-icon
									small
									class="ml-5"
								>
									mdi-chevron-down
								</v-icon>
							</v-btn>
						</template>
						<template v-else>
							<v-btn
								color="white"
								class="mb-5"
								icon
								dark
								v-bind="attrs"
								v-on="on"
							>
								<v-icon>mdi-account-outline</v-icon>
							</v-btn>
						</template>
					</template>
					<v-list>
						<v-list-item>
							<v-list-item-title class="text-left">
								<v-btn
									block
									text
									left
									class="text-left"
									@click="openDialog('login')"
								>
									Login
								</v-btn>
								<v-btn
									block
									text
									class="text-left"
									@click="openDialog('register')"
								>
									Register
								</v-btn>
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</template>
			<template v-else>
				<v-menu
					offset-y
					rounded
				>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							class="mb-5"
							dark
							icon
							v-bind="attrs"
							v-on="on"
						>
							<v-icon>mdi-account</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item>
							<v-list-item-title>
								<v-btn
									block
									small
									text
									@click="doLogout()"
								>
									<v-icon>mdi-account-arrow-right-outline</v-icon>
									Logout
								</v-btn>
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>

				<!--
				<h4>Welcome {{ user.data.user_email }}!</h4>
				<v-btn
					text
					small
					@click="doLogout()"
				>
					Logout
				</v-btn>
				-->
			</template>
		</span>
		<!--
		<base-btn
			class="ml-3"
			large
			href="https://store.vuetifyjs.com/product/freelancer-theme-free?ref=freelancer"
		>
			Download for Free

			<v-icon
				right
				small
			>
				mdi-open-in-new
			</v-icon>
		</base-btn>
		-->
	</v-app-bar>
</template>

<script>
export default {
	name: 'CoreAppBar',
	components: {
		navBar: () => import('@/components/core/NavBar'),
	},
	props: {
		height: Number,
	},
	data: () => ({
		showLogo: true,
		isScrolling: false,
		sectionObserver: null,
		username: '',
		password: '',
		nav: [
			{
				label: 'Welcome',
				to: '/welcome',
				color: 'info',
			},
			{
				label: 'Services',
				to: '/services',
				color: 'info',
			},
			{
				label: 'Contact',
				to: '/contact',
				color: 'info',
			},
		],
	}),
	computed: {
		user () {
			return this.$store.state.app.user
			/*
			if (this.$store.state.app && Object.keys(this.$store.state.app).includes('user') && this.$store.state.app.user.isLoggedIn) {
			} else {
				return {}
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

	},
	methods: {
		onScroll () {
			const offset = window.pageYOffset
			this.isScrolling = offset > 50
			this.showLogo = offset > 200
			// console.log('onScroll Y offset:', window.pageYOffset)
		},
		doLogout () {
			this.$store.dispatch('app/doLogout')
			this.$router.push('/')
		},
		openDialog (name) {
			console.log('openDialog', name)
			this.$store.dispatch('app/resetDialog')
			// this.$store.commit('app/incrementDialogCounter')
			if (name === 'login') {
				this.$store.commit('app/setDialog', 'login')
				this.$store.commit('app/setDialogActive', true)
			} else if (name === 'register') {
				this.$store.commit('app/setDialog', 'register')
				this.$store.commit('app/setDialogActive', true)
			} else {
				console.log('fall through')
			}
		},
	},
}
</script>
