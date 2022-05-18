<template>
	<v-app>
		<div :style="'height:'+headerHeight+'px;'" />
		<core-app-bar :height="headerHeight" />

		<!-- <core-view /> -->

		<!-- <router-view /> -->

		<div
			:style="'height:'+mainHeight+'px;'"
		>
			<router-view :key="routerKey" />
			<!--
			<router-view
				v-slot="{ Component }"
				:key="routerKey"
			>
				<component
					:is="Component"
					:header="headerHeight"
					:footer="footerHeight"
				/>
			</router-view>
			-->
		</div>

		<photo-snack />

		<div :style="'height:'+footerHeight+'px;'" />

		<core-footer :height="footerHeight" />
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {
		CoreAppBar: () => import('@/components/core/AppBar'),
		CoreFooter: () => import('@/components/core/Footer'),
		PhotoSnack: () => import('@/components/base/PhotoSnack'),
		// CoreView: () => import('@/components/core/View'),
	},
	data: () => ({
		windowHeight: 0,
		dialog: false,
	}),
	computed: {
		headerHeight () {
			return (this.$vuetify.breakpoint.mdAndUp ? 78 : 56)
			// return 64
		},
		footerHeight () {
			return (this.$vuetify.breakpoint.mdAndUp ? 68 : 56)
			// return 88
		},
		mainHeight () {
			if (this.windowHeight) {
				return this.windowHeight - (this.headerHeight + this.footerHeight)
			} else {
				return 1200
			}
		},
		routerKey () {
			return this.$store.state.app.routerkey
		},
	},
	watch: {
		windowHeight (newVal) {
			console.log('watcher windowHeight')
			// this.$store.commit('app/setInnerHeight', newVal)
			this.$store.dispatch('app/setDimensions', {
				height: newVal,
				header: this.headerHeight,
				footer: this.footerHeight,
			})
		},
	},
	mounted () {
		window.addEventListener('resize', () => {
			this.handleResize()
		})
		this.windowHeight = window.innerHeight
		this.handleResize()
		console.log('env variables', process.env, process.env.NODE_ENV)
	},
	methods: {
		handleResize () {
			this.$store.commit('app/setScreen', {
				height: window.innerHeight,
				width: window.innerWidth,
				header: this.headerHeight,
				body: window.innerHeight - (this.headerHeight + this.footerHeight),
				footer: this.footerHeight,
			})
		},
	},
}
</script>
