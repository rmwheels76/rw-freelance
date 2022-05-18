<template>
	<section
		id="welcome"
	>
		<template v-if="!$vuetify.breakpoint.smAndDown">
			<v-sheet
				:width="$vuetify.breakpoint.smAndDown?'100%':'50%'"
				style="position:fixed;"
			>
				<v-img
					:src="imageSrc"
					cover
					height="100vh"
					transition="slide-x-transition"
					alt="Photo by Alexandru Acea on Unsplash"
					@mouseover="$store.commit('app/setPhotoSnack', imageKey)"
				/>
			</v-sheet>
			<welcome :the-style="windowStyle" />
		</template>
		<template v-else>
			<welcome :the-style="windowStyle" />
		</template>
	</section>
</template>

<script>
import Welcome from '@/components/content/Welcome'

export default {
	components: {
		Welcome,
	},
	props: {
		header: Number,
		footer: Number,
	},
	data: () => ({
		debug: false,
		imageKey: 'deskstormtrooper',
	}),
	computed: {
		appState () {
			return this.$store.state.app
		},
		imageObj () {
			if (this.$store.state.app.images && Object.keys(this.$store.state.app.images).length && Object.keys(this.$store.state.app.images).includes(this.imageKey)) {
				return this.$store.state.app.images[this.imageKey]
			}
			return false
		},
		imageSrc () {
			if (this.imageObj && Object.keys(this.imageObj).length && Object.keys(this.imageObj).includes('src')) {
				const fileName = this.imageObj.src
				return require(`../assets/unsplash/${fileName}.jpg`) // the module request
			} else {
				return ''
			}
		},
		photoSnackbar: {
			// getter
			get: function () {
				return this.$store.state.app.photoSnackbar.on
			},
			// setter
			set: function (newValue) {
				this.$store.commit('app/setPhotoSnackActive', newValue)
			},
		},
		windowStyle () {
			// const height = this.$store.state.app.innerHeight - (this.header + this.footer)
			// position:fixed;right: 0;overflow-y:scroll;overflow-x:hidden;padding:25px;
			// ';padding-top:' + this.appState.screen.header + 'px;padding-bottom:' + this.appState.screen.footer + ';height:' + this.appState.screen.body + 'px;'
			if (this.$vuetify.breakpoint.smAndDown) {
				return 'position:relative;width:100%;height:' + this.appState.screen.body + 'px;margin-bottom:' + this.appState.screen.footer + 'px;padding:25px;'
			} else {
				return 'width:50%;position:fixed;right:0;overflow-y:scroll;overflow-x:hidden;padding:25px;height:' + this.appState.screen.body + 'px;'
			}
		},
	},
	watch: {

	},
	async created () {

	},
	methods: {

	},
}
</script>
